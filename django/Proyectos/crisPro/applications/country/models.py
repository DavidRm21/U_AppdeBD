from django.db import models
from applications.languageInfo.models import LanguageInfo

# Create your models here.
class Country(models.Model):

    code = models.CharField(
        'code',
        null=False,
        max_length=7, 
        primary_key=True
        )
    
    name = models.CharField(
        'Name',
        null=False,
        max_length=50,
        unique=True
        )
    
    continent_choices = [
        ('Asia', 'Asia'),
        ('Europe', 'Europe'),
        ('North America', 'North America'),
        ('Africa', 'Africa'),
        ('Oceania', 'Oceania'),
        ('Antarctica', 'Antarctica'),
        ('South America', 'South America'),
    ]
    
    continent = models.CharField(
        'Continent',
        max_length=15, 
        choices=continent_choices, 
        null=False,
        default='Asia'
        )
    
    region = models.CharField(
        'Region',
        null=False,
        max_length=26,
        default=''
        )
    
    surface_area = models.DecimalField(
        'SurfaceArea',
        null=False,
        max_digits=10,
        decimal_places=2,
        default=0.0
        )
    
    indep_year = models.SmallIntegerField(
        'IndepYear',
        null=True,
        )
    
    population = models.BigIntegerField(
        'Population',
        null=False,
        default=0
        )
    
    life_expectancy = models.DecimalField(
        'LifeExpectancy',
        null=False,
        max_digits=3,
        decimal_places=1,
        default=0.0
        )
    
    gnp = models.DecimalField(
        'GNP',
        null=True,
        max_digits=10,
        decimal_places=2,
        default=0.00
        )
    
    gnp_old = models.DecimalField(
        'GNPOld',
        null=True,
        max_digits=10,
        decimal_places=2,
        default=0.00
        )
    
    local_name = models.CharField(
        'LocalName',
        null=False,
        default='',
        max_length=50
        )
    
    government_form = models.CharField(
        'GovernmentForm',
        max_length=50,
        default=''
        )
    
    head_of_state = models.CharField(
        'HeadOfState',
        max_length=60,
        default=''
        )
    
    capital = models.IntegerField(
        'Capital',
        default=0,
        null=True
        )
    
    arable_land_area = models.DecimalField(
        'ArableLandArea',
        null=False,
        max_digits=10,
        decimal_places=2,
        default=0.00
        )
    
    national_anthem = models.TextField(
        'NationalAnthem',
        null=True,
        default=''
        )
    
    flag = models.ImageField(
        'Flag',
        upload_to='assets/',
        )
    
    languages = models.ManyToManyField(LanguageInfo)
    
    search_fields = ('name', 'code',)
    list_filter = ('name',)
    
    class Meta:
        verbose_name = 'Country'
        verbose_name_plural = 'Countries'
        ordering = ['name']
        unique_together = ('name', 'code')
    
    def __str__(self):
        return f"{self.name} - {self.code}"