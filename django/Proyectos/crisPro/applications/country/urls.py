from django.contrib import admin
from django.urls import path, include
from . import views

app_name = "country_app"

urlpatterns = [
        path('NewCountry/',
                views.NewCountry.as_view(),
                name='NewCountry'),
        path('CountryAPISerializer/',
                views.CountryAPISerializer.as_view(),
                name='CountryAPISerializer'),
        path('ShowCountry/', 
                views.ShowCountry.as_view()),
        path('ShowIdCountry/', 
                views.ShowIdCountry.as_view()),
]