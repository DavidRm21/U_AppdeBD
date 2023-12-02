from rest_framework import serializers, pagination

from .models import(
    LanguageInfo
)

class LanguageInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = LanguageInfo
        fields = '__all__'