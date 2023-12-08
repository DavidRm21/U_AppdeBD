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
        CitySerializer
)

# ------------------------------------------------------------------
# MODELOS
# ------------------------------------------------------------------
from .models import City

# ------------------------------------------------------------------
# CREAR City
# ------------------------------------------------------------------

class NewCity(CreateAPIView):
        def get_queryset(self):
                return City.objects.all()
        serializer_class = CitySerializer

# ------------------------------------------------------------------
# MOSTRAR City
# ------------------------------------------------------------------

class ShowCity(ListAPIView):
        def get_queryset(self):
                return City.objects.all()
        serializer_class = CitySerializer

# ------------------------------------------------------------------
# MOSTRAR POR ID City
# ------------------------------------------------------------------

class ShowIDCity(RetrieveAPIView):
        def get_queryset(self):
                return City.objects.all()
        serializer_class = CitySerializer

# ------------------------------------------------------------------
# ACTUALIZAR City
# ------------------------------------------------------------------

class UpdateCity(UpdateAPIView):
        def get_queryset(self):
                return City.objects.all()
        serializer_class = CitySerializer
# ------------------------------------------------------------------
# ELIMINAR City
# ------------------------------------------------------------------

class DeleteCity(DestroyAPIView):
        def get_queryset(self):
                return City.objects.all()
        serializer_class = CitySerializer