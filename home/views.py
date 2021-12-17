from django.shortcuts import render
from .models import Chapter, Image, Event
# Create your views here.


def home(request):
    context = {
        'events': [
            object for object in Event.objects.all()
        ],
        'images': [
            object.image.url for object in Image.objects.all()
        ],
        'chapters': Chapter.objects.all()
    }
    return render(request, 'home/index.html', context)
