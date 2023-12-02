from django.contrib import admin
from django.urls import path, include
from . import views

app_name = "city_app"

urlpatterns = [
        path('createcity/',
                views.NewCity.as_view(),
                name='NewCity'),
        path('CityAPISerializer/',
                views.CityAPISerializer.as_view(),
                name='CityAPISerializer'),
        path('showcity/', 
                views.ShowCity.as_view()),
        path('showidcity/<int:id>/',
                views.ShowIDCity.as_view()),
]