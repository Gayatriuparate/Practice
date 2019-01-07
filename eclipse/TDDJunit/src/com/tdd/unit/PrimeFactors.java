package com.tdd.unit;

import java.util.ArrayList;
import java.util.List;

public class PrimeFactors implements PrimeInterface {

	@Override
	public List<Integer> getFactors(int num) {
		List<Integer> factorList = new ArrayList<>();
		if (num == 1)
			return null;
		else {
			int fact = 2;
			while (num>=fact) {
				if (num % fact == 0) {
					factorList.add(fact);
					num /= fact;
				} else {
					fact++;
				}
			}
		}
		return factorList;
	}

}
