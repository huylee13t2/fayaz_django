# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-23 15:58
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='token',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]