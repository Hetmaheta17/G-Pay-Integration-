from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.http import JsonResponse

def payment_view(request):
    return render(request, 'payment.html')

def process_payment(request):
    if request.method == 'POST':
        # Handle payment processing here if necessary
        return JsonResponse({'success': True, 'message': 'Payment processed successfully'})
    return JsonResponse({'error': 'Invalid request'}, status=400)


# views.py
# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# import json

# @csrf_exempt
# def payment(request):
#     if request.method == "POST":
#         try:
#             data = json.loads(request.body)
#             payment_data = data.get('paymentData')
#             # Process payment_data (validate, save, etc.)
#             return JsonResponse({'status': 'success'})
#         except json.JSONDecodeError:
#             return JsonResponse({'status': 'error', 'message': 'Invalid data'})
#     return JsonResponse({'status': 'error', 'message': 'Invalid request method'})

