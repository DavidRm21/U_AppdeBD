from django.db import models
from applications.country.models import Country

# Create your models here.
class City(models.Model):

    name = models.CharField(
        'Name',
        null=False,
        max_length=30,
        default=''
        )
    country_code = models.ForeignKey(
        Country, 
        on_delete=models.CASCADE
        )
    district = models.CharField(
        'District',
        max_length=20,
        null=False,
        default=''
        )
    population = models.IntegerField(
        'Population',
        null=False,
        default=0
        )
    photo_city = models.ImageField(
        'PhotoCity',
        upload_to='PhotoImage',
        null=True
        )
    pollution_rate = models.DecimalField(
        'PollutionRate',
        max_digits=5,
        decimal_places=2,
        null=True,
        default=0.00
        )
    
    class Meta:
        verbose_name = 'City'
        verbose_name_plural = 'Cities'
        ordering = ['name']
        unique_together = ('name', 'country_code')

    def __str__(self):
        return f"{self.name} - {self.country_code} - {self.id}"
    
    
