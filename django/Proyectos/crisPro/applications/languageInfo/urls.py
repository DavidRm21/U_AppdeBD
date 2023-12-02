from django.contrib import admin
from django.urls import path, include
from . import views

app_name = 'languageInfo_app'

urlpatterns = [
    path('ShowLanguage/', 
        views.ShowLanguage.as_view()),
    path('NewLanguage/', 
        views.NewLanguageInfo.as_view(),
        name='NewLanguageInfo'),
    path('ShowIdLanguage/<int:pk>/', 
        views.ShowLanguageId.as_view()),
]