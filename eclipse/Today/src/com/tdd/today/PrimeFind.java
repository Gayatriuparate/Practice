package com.tdd.today;

import java.util.ArrayList;
import java.util.List;

public class PrimeFind implements PrimeInter {

	@Override
	public List<Integer> getFactor(int num) {
		List<Integer> PFactor = new ArrayList<>();
		// TODO Auto-generated method stub
		int Fact=2;
		if(num==1)
		return null;
		else
			if(num%Fact==0)
			{
			PFactor.add(num);
			num=num/2;
			}
		
			
		return PFactor;
	}

}
