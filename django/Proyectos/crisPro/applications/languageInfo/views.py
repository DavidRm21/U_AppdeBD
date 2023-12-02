from django.shortcuts import render
from django.urls import reverse_lazy
# Create your views here.

# ------------------------------------------------------------------
# APIS
# ------------------------------------------------------------------
from rest_framework.generics import (
    ListAPIView,
    ListCreateAPIView,
    CreateAPIView,
    # DetailView
    RetrieveAPIView,
    # Delete
    DestroyAPIView,
    # Actualizar
    UpdateAPIView,
    # Recupera y actualiza
    RetrieveUpdateAPIView,
    # Recupera y elimina
    RetrieveDestroyAPIView,
)

from .serializer import (
    LanguageInfoSerializer
)
# ------------------------------------------------------------------
# VISTAS A USAR
# ------------------------------------------------------------------

from django.views.generic import ListView, CreateView, UpdateView, DeleteView

# ------------------------------------------------------------------
# MODELOS
# ------------------------------------------------------------------
from .models import LanguageInfo

# ------------------------------------------------------------------
# FORMULARIOS
# ------------------------------------------------------------------

# ------------------------------------------------------------------
# CREAR LanguageInfo
# ------------------------------------------------------------------

class NewLanguageInfo(CreateAPIView):
    queryset = LanguageInfo.objects.all()
    serializer_class = LanguageInfoSerializer
    
class ShowLanguage(ListAPIView):
    queryset = LanguageInfo.objects.all()
    serializer_class = LanguageInfoSerializer

class ShowLanguageId(RetrieveUpdateAPIView):
    queryset = LanguageInfo.objects.all()
    serializer_class = LanguageInfoSerializer

# ------------------------------------------------------------------
# API CREAR UN LENGUAJE
# ------------------------------------------------------------------
class LanguageInfoAPISerializer(CreateAPIView):
    serializer_class = LanguageInfoSerializer