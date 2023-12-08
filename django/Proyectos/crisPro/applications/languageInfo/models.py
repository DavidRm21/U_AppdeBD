from django.db import models

# Create your models here.
class LanguageInfo(models.Model):
    acronym = models.CharField(
        'siglaLanguage', 
        max_length=3,
        null=True,
        default=''
        )
    language = models.CharField(
        'Language', 
        max_length=30
        )
    is_official = models.CharField(
        'oficial', 
        null=False,
        max_length=1, 
        choices=[('T', 'T'), ('F', 'F')], 
        default='F'
        )
    percentage = models.DecimalField(
        'Percentage', 
        max_digits=5, 
        decimal_places=2,
        default=0.0 
        )
    iso_code = models.CharField(
        'ISOCode', 
        null=True,
        max_length=2,
        default=''
        )
    
    class Meta:
        verbose_name = 'Language'
        verbose_name_plural = 'Languages'
    def __str__(self):
        return self.acronym+' ' + ' - ' + str(self.language) + ' - ' +str(self.id)