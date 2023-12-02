from django.contrib import admin
from django.urls import path, include
from . import views

app_name = "city_app"

urlpatterns = [
        path('NewCity/',
                views.NewCity.as_view(),
                name='NewCity'),
        path('CityAPISerializer/',
                views.CityAPISerializer.as_view(),
                name='CityAPISerializer'),
        path('ShowCity/', 
                views.ShowCity.as_view()),
        path('ShowIdCity/<int:id>/',
                views.ShowIDCity.as_view()),
]