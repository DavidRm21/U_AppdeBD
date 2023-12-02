from django.contrib import admin
from django.urls import path, include
from . import views

app_name = "country_app"

urlpatterns = [
        path('createCountry/',
                views.NewCountry.as_view(),
                name='NewCountry'),
        path('CountryAPISerializer/',
                views.CountryAPISerializer.as_view(),
                name='CountryAPISerializer'),
        path('showCountry/', 
                views.ShowCountry.as_view()),
        path('showIdCountry/', 
                views.ShowIdCountry.as_view()),
]