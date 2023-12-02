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
    CountrySerializer
)
# ------------------------------------------------------------------
# VISTAS A USAR
# ------------------------------------------------------------------

from django.views.generic import ListView, CreateView, UpdateView, DeleteView

# ------------------------------------------------------------------
# MODELOS
# ------------------------------------------------------------------
from .models import Country

# ------------------------------------------------------------------
# FORMULARIOS
# ------------------------------------------------------------------


# ------------------------------------------------------------------
# CREAR Country
# ------------------------------------------------------------------

class NewCountry(CreateAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer
    
class ShowCountry(ListAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

class ShowIdCountry(RetrieveUpdateAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

# ------------------------------------------------------------------
# API CREAR UN TRABAJO
# ------------------------------------------------------------------
class CountryAPISerializer(CreateAPIView):
    serializer_class = CountrySerializer