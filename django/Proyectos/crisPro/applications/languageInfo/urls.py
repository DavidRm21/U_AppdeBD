from django.contrib import admin
from django.urls import path, include
from . import views

app_name = 'languageInfo_app'

urlpatterns = [
    path('NewLanguage/', 
        views.NewLanguageInfo.as_view()),
    path('ShowLanguage/', 
        views.ShowLanguage.as_view(),),
    path('ShowIdLanguage/<pk>/', 
        views.ShowIdLanguage.as_view()),
    path('UpdateLanguage/<pk>/',
        views.UpdateLanguageInfo.as_view()),
    path('DeleteLanguage/<pk>/',
        views.DeleteLanguageInfo.as_view()),
]