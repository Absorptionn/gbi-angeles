from django.db import models
from django.utils import timezone

# Create your models here.

class Chapter(models.Model):
    barangay = models.CharField(max_length=50)
    officers = models.IntegerField()
    members = models.IntegerField()

    def __str__(self) -> str:
        return f"Chapter(barangay={self.barangay}, officers={self.officers}, members={self.members})"

class Image(models.Model):
    image = models.ImageField(upload_to='gallery')

    def __str__(self) -> str:
        return self.image.name

class Event(models.Model):
    title = models.CharField(max_length=100)
    date = models.DateTimeField(default=timezone.now)
    description = models.TextField()

    def __str__(self) -> str:
        return f"{self.title} | {self.date}"
