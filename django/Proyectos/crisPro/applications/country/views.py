from django.shortcuts import render
from django.urls import reverse_lazy
# Create your views here.

# ------------------------------------------------------------------
# APIS
# ------------------------------------------------------------------
from rest_framework.generics import (
    # Lista
    ListAPIView,
    # Lista por id
    RetrieveAPIView,
    # Crear
    CreateAPIView,
    # Delete
    DestroyAPIView,
    # Actualizar
    UpdateAPIView,
)

from .serializer import (
    CountrySerializer
)

# ------------------------------------------------------------------
# MODELOS
# ------------------------------------------------------------------
from .models import Country

# ------------------------------------------------------------------
# CREAR Country
# ------------------------------------------------------------------

class NewCountry(CreateAPIView):
    def get_queryset(self):
        return Country.objects.all()
    serializer_class = CountrySerializer

# ------------------------------------------------------------------
# MOSTRAR Country
# ------------------------------------------------------------------

class ShowCountry(ListAPIView):
    
    def get_queryset(self):
        return Country.objects.all()
    serializer_class = CountrySerializer

# ------------------------------------------------------------------
# MOSTRAR POR ID Country
# ------------------------------------------------------------------

class ShowIdCountry(RetrieveAPIView):
    
    def get_queryset(self):
        return Country.objects.all()
    serializer_class = CountrySerializer

# ------------------------------------------------------------------
# ELIMINAR Country
# ------------------------------------------------------------------

class DeleteCountry(DestroyAPIView):
    def get_queryset(self):
        return Country.objects.all()
    
# ------------------------------------------------------------------
# ACTUALIZAR Country
# ------------------------------------------------------------------
    
class UpdateCountry(UpdateAPIView):
    def get_queryset(self):
        return Country.objects.all()

