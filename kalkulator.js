function masa_rura()
{
	// pobrane wartosci dziele przez 100 żeby uzyskać dm3
	var dlugosc_rury = parseFloat(document.getElementById("dl_rura").value)/100;
	var srednica_rury = parseFloat(document.getElementById("sr_rura").value)/100;
	var grubosc_rury = parseFloat(document.getElementById("gr_rura").value)/100;
	var maly_promien = (srednica_rury/2)-grubosc_rury;
	var objetosc =  Math.PI * dlugosc_rury*(Math.pow((srednica_rury/2),2) - Math.pow(maly_promien,2));
	var gestosc = 7.85; //kg/dm3
	
	var masa_r= objetosc * gestosc;
	var masa_r_fixed = masa_r.toFixed(2);
	 
	if(!isNaN(masa_r))
	{
		document.getElementById("masa_rury_wynik").innerHTML="Masa rury[kg]: " + masa_r_fixed;
	}
}

function masa_pret()
{
	// pobrane wartosci dziele przez 100 żeby uzyskać dm3
	var wysokosc_pretu = parseFloat(document.getElementById("wys_pret").value)/100;
	var szerokosc_pretu = parseFloat(document.getElementById("sz_pret").value)/100;
	var dlugosc_pretu = parseFloat(document.getElementById("dl_pret").value)/100;
	var objetosc =  wysokosc_pretu*szerokosc_pretu*dlugosc_pretu;
	var gestosc = 7.85; //kg/dm3
	
	var masa_p= objetosc * gestosc;
	var masa_p_fixed = masa_p.toFixed(2);
	if(!isNaN(masa_p))
	{
		document.getElementById("masa_pretu_wynik").innerHTML="Masa prętu kwadratowego[kg]: " +  masa_p_fixed;
	}
}

function masa_blacha()
{
	// pobrane wartosci dziele przez 100 żeby uzyskać dm3
	var grubosc_blacha = parseFloat(document.getElementById("gr_blacha").value)/100;
	var wysokosc_blacha = parseFloat(document.getElementById("wys_blacha").value)/100;
	var dlugosc_blacha = parseFloat(document.getElementById("dl_blacha").value)/100;
	var objetosc =  grubosc_blacha*wysokosc_blacha*dlugosc_blacha;
	var gestosc = 7.85; //kg/dm3
	
	var masa_b= objetosc * gestosc;
	var masa_b_fixed = masa_b.toFixed(2);
	if(!isNaN(masa_b))
	{
		document.getElementById("masa_blachy_wynik").innerHTML="Masa blachy[kg]: " + masa_b_fixed;
	}
}


function masa_profil_zamkniety()
{
	// pobrane wartosci dziele przez 100 żeby uzyskać dm3 bo 1 mm to 0,01 dm
	var dlugosc = parseFloat(document.getElementById("dl_profil").value)/100;
	var wysokosc = parseFloat(document.getElementById("wys_profil").value)/100;
	var szerokosc = parseFloat(document.getElementById("szer_profil").value)/100;
	var grubosc = parseFloat(document.getElementById("grubosc_profil").value)/100;
	var objetosc_duzy = dlugosc * wysokosc * szerokosc;
	var objetosc_maly = (wysokosc - (2*grubosc)) * (szerokosc - (2*grubosc)) * dlugosc;
	var objetosc = objetosc_duzy - objetosc_maly;
	var gestosc = 7.85; //kg/dm3
	
	var masa_pz = objetosc * gestosc;
	var masa_pz_fixed = masa_pz.toFixed(2);
	if(!isNaN(masa_pz))
	{
		document.getElementById("masa_profil_wynik").innerHTML="Masa profilu[kg]: " + masa_pz_fixed;
	}
}

function masa_katownik()
{
		
	var wybor = {};
        wybor['20x3'] = {'a': 20 , 'g': 3, 'R<sub>max</sub>': 3.5, 'R<sub>1max</sub>': 2 , 'Waga': 0.88};
        wybor['25x3'] = {'a': 25 , 'g': 3 , 'R<sub>max</sub>': 3.5 , 'R<sub>1max</sub>': 2 , 'Waga': 1.12};
        wybor['30x3'] = {'a': 30 , 'g': 3 , 'R<sub>max</sub>': 5 , 'R<sub>1max</sub>': 2.5, 'Waga': 1.36};
        wybor['30x4'] = {'a': 30 , 'g': 4 , 'R<sub>max</sub>': 5 , 'R<sub>1max</sub>': 2.5 , 'Waga': 1.78};
        wybor['35x3'] = {'a': 35 , 'g': 3 , 'R<sub>max</sub>': 5 , 'R<sub>1max</sub>': 2.5 , 'Waga': 1.6};
        wybor['35x4'] = {'a': 35 , 'g': 4 , 'R<sub>max</sub>': 5 , 'R<sub>1max</sub>': 2.5 , 'Waga': 2.1};
        wybor['35x5'] = {'a': 35 , 'g': 5 , 'R<sub>max</sub>': 5 , 'R<sub>1max</sub>': 2.5 , 'Waga': 2.57};
        wybor['40x3'] = {'a': 40 , 'g': 3 , 'R<sub>max</sub>': 6 , 'R<sub>1max</sub>': 3 , 'Waga': 1.84};
        wybor['40x4'] = {'a': 40 , 'g': 4 , 'R<sub>max</sub>': 6 , 'R<sub>1max</sub>': 3 , 'Waga': 2.42};
        wybor['45x3'] = {'a': 45 , 'g': 3 , 'R<sub>max</sub>': 7 , 'R<sub>1max</sub>': 3.5 , 'Waga': 2.09};
        wybor['45x4'] = {'a': 45 , 'g': 4 , 'R<sub>max</sub>': 7 , 'R<sub>1max</sub>': 3.5 , 'Waga': 2.74};
        wybor['45x5'] = {'a': 45 , 'g': 5 , 'R<sub>max</sub>': 7 , 'R<sub>1max</sub>': 3.5 , 'Waga': 3.38};
        wybor['50x4'] = {'a': 50 , 'g': 4 , 'R<sub>max</sub>': 7 , 'R<sub>1max</sub>': 3.5 , 'Waga': 3.06};
        wybor['50x5'] = {'a': 50 , 'g': 5 , 'R<sub>max</sub>': 7 , 'R<sub>1max</sub>': 3.5 , 'Waga': 3.89};
        wybor['50x6'] = {'a': 50 , 'g': 6 , 'R<sub>max</sub>': 7 , 'R<sub>1max</sub>': 3.5 , 'Waga': 4.47};
	
	var dlugosc = parseFloat(document.getElementById("dl_katownik").value)/1000;
	var e = document.getElementById("rozmiar_katownika");
	var wybrany_rozmiar = e.options[e.selectedIndex].value; // zczytanie wybranej wartosci
	var wybrane_dane = wybor[wybrany_rozmiar];
	var wybrane_a = wybrane_dane['a'] ;
	var wybrane_g = wybrane_dane['g'];
	var wybane_waga = wybrane_dane['Waga'];
	
	var waga_wynik = dlugosc * wybane_waga;
	var masa_kat_fixed = waga_wynik.toFixed(2);
	
	document.getElementById("wynikJsona").innerHTML="ramie a [mm]: " + JSON.stringify(wybrane_a);
	document.getElementById("wynikJsong").innerHTML="grubość [mm]: " + JSON.stringify(wybrane_g);
	document.getElementById("masa_katownik_wynik").innerHTML="Masa [kg]:" + JSON.stringify(masa_kat_fixed);
	
		
}