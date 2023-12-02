from django.db import models

# Create your models here.
class LanguageInfo(models.Model):
    language = models.CharField(
        'Language', 
        max_length=30, 
        primary_key=True
        )
    is_official = models.CharField(
        'active', 
        null=False,
        max_length=1, 
        choices=[('T', 'T'), ('F', 'F')], 
        default='F'
        )
    percentage = models.DecimalField(
        'Percentage', 
        max_digits=4, 
        decimal_places=1,
        default=0.0 
        )
    iso_code = models.CharField(
        'ISOCode', 
        null=True,
        max_length=3,
        default=''
        )
    language_level = models.CharField(
        'LanguageLevel', 
        max_length=3,
        null=True,
        default=''
        )
    
    class Meta:
        verbose_name = 'LanguageInfo'
        verbose_name_plural = 'LanguagesInfo'
    def __str__(self):
        return self.language+' ' + ' - ' + str(self.language)