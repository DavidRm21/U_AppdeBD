from django.contrib import admin
from django.urls import path, include
from . import views

app_name = 'languageInfo_app'

urlpatterns = [
    path('showLanguage/', 
        views.ShowLanguage.as_view()),
    path('createLanguage/', 
        views.NewLanguageInfo.as_view(),
        name='NewLanguageInfo'),
    path('showIdLanguage/<int:pk>/', 
        views.ShowLanguageId.as_view()),
]