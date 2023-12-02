from rest_framework import serializers, pagination

from .models import(
    Country
)

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ('__all__')