
from django.urls import path
from .views import payment_view, process_payment

urlpatterns = [
    path('',payment_view,name='payment_view'),
    path('payment/', payment_view, name='payment_view'),
    path('process-payment/', process_payment, name='process_payment'),
]

# urls.py
# from django.urls import path
# from . import views

# urlpatterns = [
#     path('payment/', views.payment, name='payment'),
# ]

