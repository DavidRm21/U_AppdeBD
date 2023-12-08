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
        path('UpdateCountry/', 
                views.UpdateCountry.as_view()),
        path('DeleteCountry/',
                views.DeleteCountry.as_view()),
]