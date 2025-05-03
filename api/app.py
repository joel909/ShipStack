from flask import Flask, jsonify, request,render_template,g,redirect,url_for,send_from_directory
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

no_auth_endpoints = ["login_user"]
# @app.before_request
# def before_request_cd():
#     g.route_name = request.endpoint
#     g.user_id = request.cookies.get("user_id")
#     g.user_role = request.cookies.get("user_role")
#     if g.route_name in no_auth_endpoints:
#         pass
#     else:
#         message = redis_client.hgetall("abc@gmail.com")
#         print(message)
#         if g.user_id is None:
#             return redirect(url_for('login_user'))
#         if g.user_role is None:
#             return redirect(url_for('login_user'))
#         else:1``
#             message = redis_client.hgetall("abc@gmail.com")
#             print(message)

    



@app.route('/')
def home():
    return render_template('index.html')

@app.route('/signup')
def signup_user():
    return render_template('page_divisions/sign_up.html')


@app.route("/login")
def login_user():
    return render_template('page_divisions/login.html')






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
                return jsonify({"message": "Invalid Email ID or Password"}), 401
            elif user_data['password'] != password:
                return jsonify({"message": "Invalid Email ID or Password"}), 401
            elif user_data['password'] == password:
                return jsonify({"message": "Login successful"}), 200
            else:
                return jsonify({"message": "Internal Server Error"}), 500
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
