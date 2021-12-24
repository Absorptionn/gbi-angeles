from django.shortcuts import render
from .models import Chapter, Image, Event
import os


def home(request):
    images = os.listdir(os.path.join(os.path.dirname(
        os.path.realpath(__file__)), r'.\static\home\images\gallery'))

    chapters = Chapter.objects.all()
    members_sum = sum(chapter.members for chapter in chapters)

    events = [event for event in Event.objects.all()]
    for event in events:
        temp_event_date = event.date
        setattr(event, 'date', temp_event_date.strftime("%B %m, %Y"))
        setattr(event, 'time', temp_event_date.strftime("%I:%M %p"))

    context = {
        'events': events,
        'images': [
            f'/static/home/images/gallery/{image}' for image in images
        ],
        'chapters':  sorted(chapters, key=lambda o: o.barangay),
        'members_sum': members_sum
    }
    return render(request, 'home/index.html', context)
