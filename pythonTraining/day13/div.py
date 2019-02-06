def divied(devidend, devisor):
    if not devisor:
        return None, None
    quotient = devidend//devisor
    remainder = devidend % devidend
    return quotient, remainder

q, r = divied(35, 4)
