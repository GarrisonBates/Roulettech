from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from kangacook.utils import getDadJoke


def dad_joke(request):
    dadJoke = getDadJoke()
    return JsonResponse({"dadJoke": dadJoke})


def square_number(request):
    number = int(request.GET.get("n"))
    return JsonResponse({"square": number * number})
