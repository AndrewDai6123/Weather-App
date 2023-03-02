import requests
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/weather', methods=['POST'])
def weather():
    city = request.form['city']
    api_key = 'fe0086fd2acc7d3e30b5682095dfdaff'
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
    response = requests.get(url)
    weather_data = response.json()
    if weather_data.get('cod') == 200:
        weather = {
            'city': city,
            'temperature': {
                'celsius': weather_data['main']['temp'],
                'fahrenheit': (weather_data['main']['temp'] * 1.8) + 32,
                'kelvin': weather_data['main']['temp'] + 273.15,
            },
            'description': weather_data['weather'][0]['description'].capitalize(),
            'icon': weather_data['weather'][0]['icon'],
            'humidity': weather_data['main']['humidity'],
            'wind_speed': weather_data['wind']['speed']
        }
        return render_template('weather.html', weather=weather)
    else:
        error_message = weather_data.get('message', 'Unknown error').capitalize()
        return render_template('home.html', error_message=error_message)

if __name__ == '__main__':
    app.run()
