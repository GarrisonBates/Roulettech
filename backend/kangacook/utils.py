import requests


def getDadJoke():
    headers = {"Accept": "application/json"}
    data = requests.get("https://icanhazdadjoke.com", headers=headers).json()
    return data.get("joke")
