from django.shortcuts import render
from django.urls import reverse_lazy
# Create your views here.

# ------------------------------------------------------------------
# APIS
# ------------------------------------------------------------------
from rest_framework.generics import (
    # Lista
    ListAPIView,
    # Crear
    CreateAPIView,
    # Lista por id
    RetrieveAPIView,
    # Delete
    DestroyAPIView,
    # Actualizar
    UpdateAPIView,
)

from .serializer import (
    LanguageInfoSerializer
)

# ------------------------------------------------------------------
# MODELOS
# ------------------------------------------------------------------
from .models import LanguageInfo


# ------------------------------------------------------------------
# MOSTRAR LanguageInfo
# ------------------------------------------------------------------

class ShowLanguage(ListAPIView):
    
    def get_queryset(self):
        return LanguageInfo.objects.all()
    serializer_class = LanguageInfoSerializer

# ------------------------------------------------------------------
# MOSTRAR POR ID LanguageInfo
# ------------------------------------------------------------------

class ShowIdLanguage(RetrieveAPIView):

    def get_queryset(self):
        return LanguageInfo.objects.all()
    serializer_class = LanguageInfoSerializer

# ------------------------------------------------------------------
# CREAR LanguageInfo
# ------------------------------------------------------------------

class NewLanguageInfo(CreateAPIView):
    
    def get_queryset(self):
        return LanguageInfo.objects.all()
    serializer_class = LanguageInfoSerializer

# ------------------------------------------------------------------
# ELIMINAR LanguageInfo
# ------------------------------------------------------------------
    
class DeleteLanguageInfo(DestroyAPIView):
    
    def get_queryset(self):
        return LanguageInfo.objects.all()
    serializer_class = LanguageInfoSerializer

# ------------------------------------------------------------------
# ACTUALIZAR LanguageInfo
# ------------------------------------------------------------------

class UpdateLanguageInfo(UpdateAPIView):

    def get_queryset(self):
        return LanguageInfo.objects.all()
    serializer_class = LanguageInfoSerializer
