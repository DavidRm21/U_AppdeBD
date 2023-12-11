from django.contrib import admin
from django.urls import path, include
from . import views

app_name = "country_app"

urlpatterns = [
        path('NewCountry/',
                views.NewCountry.as_view(),),
        path('ShowCountry/',
                views.ShowCountry.as_view(),),
        path('ShowIdCountry/<pk>', 
                views.ShowIdCountry.as_view()),
        path('UpdateCountry/<pk>', 
                views.UpdateCountry.as_view()),
        path('DeleteCountry/<pk>',
                views.DeleteCountry.as_view()),
]