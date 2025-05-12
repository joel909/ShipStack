from flask import Flask, jsonify, request,render_template,g,redirect,url_for,send_from_directory,json,make_response
import redis
from flask_cors import CORS
#redis config 
redis_client = redis.Redis(
    host='redis-17605.c17.us-east-1-4.ec2.redns.redis-cloud.com', 
    port=17605,                  
    password='PtVPqmqFPlQ45QB892kJzma4pczpjIbG',  
    decode_responses=True       
)


app = Flask(__name__)
app.config['MAX_CONTENT_LENGTH'] = 50 * 1024 * 1024 

auth_endpoints = ["home"]
non_auth_endpoints = ["login_user","signup_user"] 
api_endpoints = ["login","signup","static"]
@app.before_request
def before_request_cd():    
    g.route_name = request.endpoint
    g.request_method = request.method
    g.email = request.cookies.get("email")
    g.user_type = request.cookies.get("user_type")
    if g.route_name in auth_endpoints:
        print("auth route accessed")
        print("email",g.email,"usertype",g.user_type,"route name",g.route_name,g.route_name != "home")
        if g.email is not None and g.user_type is not None and g.route_name != "home":
            return redirect(url_for('home'))
        elif g.email is None or g.user_type is None and g.route_name == "home":
            return redirect(url_for('login_user'))
        else:
            pass
    elif g.route_name in non_auth_endpoints:
        if g.email is not None and g.user_type is not None and g.route_name != "home":
            print("non auth route accessed")
            return redirect(url_for('home'))
        

    # print("req method",g.request_method,"route name",g.route_name)
    # if g.route_name not in auth_endpoints and g.request_method == "GET":
    #     if g.email is not None and g.user_type is not None and g.route_name != "static":
    #         return redirect(url_for('home'))
    #     elif  g.route_name == "static":
    #         print("static route accessed")
    #         pass
    #     else:
    #         print("auth required for route",g.route_name)
    # else:
    #     #print("auth required for route",g.route_name)
    #     print("auth required for route",g.route_name)
    #     message = redis_client.hgetall(g.email)
    #     if g.email is None:
    #         return redirect(url_for('login_user'))
    #     if g.user_type is None:
    #         return redirect(url_for('login_user'))
    #     elif g.route_name  in api_endpoints:
            
    #         #print("user is logged in and data is",message)
    #     else:
    #         print("page  accessed")
    #         message = redis_client.hgetall(g.email)
            

    


###PAGES########

@app.route('/dashboard')
def home():
    return render_template('web_pages/dashboard.html')

@app.route('/signup')
def signup_user():
    return render_template('web_pages/sign_up.html')


@app.route("/login")
def login_user():
    return render_template('web_pages/login.html')






######API########
@app.route('/api/auth/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        print(data)
        email = data.get('email')
        password = data.get('password')
        if email == None or password == None:
            return jsonify({"message": "Email and password are required either is missing"}), 400
        else:
            user_data = redis_client.hgetall(email)
            print(user_data)
            if user_data == {} :
                return jsonify({"message": "Invalid email or password. Please try again."}), 401
            elif user_data['password'] != password:
                return jsonify({"message": "Invalid email or password. Please try again."}), 401
            elif user_data['password'] == password:
                response = make_response(jsonify({"message": "Login successful"}), 200)
                response.set_cookie("email", email)
                response.set_cookie("user_type", user_data['user_type'])
                return response
            else:
                return jsonify({"message": "Internal Server Error"}), 500
    except Exception as e:
        print(e)
        return jsonify({"message": "Internal Server Error","error":str(e)}), 500
    
@app.route('/api/auth/signup', methods=['POST'])
def signup():
    try:
        data = request.get_json()
        print(data)
        email = data.get('email')
        password = data.get('password')
        if email == None or password == None or email == "" or password == "":
            return jsonify({"message": "Email and password are required either is missing"}), 400
        else:
            user_data = redis_client.hgetall(email)
            print(user_data)
            if user_data != {} :
                return jsonify({"message": "User already exists"}), 409
            else:
                redis_client.hset(email, "email",email)
                redis_client.hset(email, "password",  password)
                redis_client.hset(email, "deployment", json.dumps({})) 
                redis_client.hset(email, "user_type", "default")
                repsone = make_response(jsonify({"message": "User created successfully"}), 200)
                repsone.set_cookie("email", email)
                repsone.set_cookie("user_type", "default")
                return repsone
    except Exception as e:
        print(e)
        return jsonify({"message": "Internal Server Error","error":str(e)}), 500
    
    
    
    
@app.route('/api/upload/flask', methods=['POST'])
def upload_file():
    print(request.files)
    return jsonify({'filename': "df"})

@app.route('/api/upload/new/deployment', methods=['POST'])
def new_deployment():
    redis_client.set('greeting', 'Hello from Redis Cloud!')
    message = redis_client.get('greeting')
    return jsonify({"message": message})


@app.route("/favicon.ico")
def favicon():
    return send_from_directory('static/logo','favicon.ico',mimetype='image/vnd.microsoft.icon')






if __name__ == '__main__':
    app.run(debug=True)
