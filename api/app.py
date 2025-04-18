from flask import Flask, jsonify, request,render_template
app = Flask(__name__)
app.config['MAX_CONTENT_LENGTH'] = 50 * 1024 * 1024 
@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')
@app.route('/api/upload/flask', methods=['POST'])
def upload_file():
    print(request.files)
    return jsonify({'filename': "df"})


if __name__ == '__main__':
    app.run(debug=True)
