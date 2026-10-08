from flask import Flask, render_template
# → Import Flask and render_template

app = Flask(__name__)
# → Create Flask Application


@app.route('/')
def home():
    # → Define route and function for Home Page

    return render_template('home.html')
    # → Display home.html page


@app.route('/about')
def about():
    # → Define route and function for About Page

    return render_template('about.html')
    # → Display about.html page


if __name__ == '__main__':
    # → Check whether this file is being run directly

    app.run(debug=True)
    # → Start Flask Server in Debug Mode