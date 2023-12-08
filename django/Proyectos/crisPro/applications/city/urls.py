from django.contrib import admin
from django.urls import path
from . import views

app_name = "city_app"

urlpatterns = [
        path('NewCity/',
                views.NewCity.as_view(),),
        path('ShowCity/',
                views.ShowCity.as_view(),),
        path('ShowIdCity/<pk>', 
                views.ShowIDCity.as_view()),
        path('UpdateCity/',
                views.UpdateCity.as_view()),
        path('DeleteCity/',
                views.DeleteCity.as_view()),
]