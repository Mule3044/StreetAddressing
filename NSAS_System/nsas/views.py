from django.shortcuts import render


def Routing(request):
    context = {
        "lay1": "lay1",

    }
    return render(request, 'nsas/Routing.html', context)
