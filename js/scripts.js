/**
 * @author Natan Felles natanfelles@gmail.com
 */
$(document).ready(function () {

	var hello = ' _   _                          __  __      _        _    _   _ ____\n'
		+ '| | | | ___  __ ___   ___   _  |  \\/  | ___| |_ __ _| |  | \\ | / ___|\n'
		+ '| |_| |/ _ \\/ _` \\ \\ / / | | | | |\\/| |/ _ \\ __/ _` | |  |  \\| \\___ \\\n'
		+ '|  _  |  __/ (_| |\\ V /| |_| | | |  | |  __/ || (_| | |  | |\\  |___) |\n'
		+ '|_| |_|\\___|\\__,_| \\_/  \\__, | |_|  |_|\\___|\\__\\__,_|_|  |_| \\_|____/\n'
		+ '                        |___/\n'
		+ 'by @natanfelles\n\n'
		+ '·---------------------------------------------------------------------------·\n'
		+ '| Deus será o juiz das nações, decidirá questões entre muitos povos.        |\n'
		+ '| Eles transformarão as suas espadas em arados e as suas lanças, em foices. |\n'
		+ '| Nunca mais as nações farão guerra, nem se prepararão para batalhas.       |\n'
		+ '| Is 2.4                                                                    |\n'
		+ '·---------------------------------------------------------------------------·\n';
	console.log(hello);

	/**
	 * Loads the page, change episode in summary and set id in local storage
	 * @param id Episode id
	 */
	function loadSet(id) {
		$('#content').load('capitulos/' + id + '.html');
		$('*').removeClass('active');
		$('#' + id).addClass('active');
		localStorage.setItem('capitulo', id);
	}

	var capitulo = localStorage.getItem('capitulo');
	if (capitulo) {
		loadSet(capitulo);
	} else {
		loadSet(0);
	}

	$('#sumary > a[id]').click(function () {
		loadSet(this.id);
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() >= 110) {
			$('#toTop').show();
		} else {
			$('#toTop').hide();
		}
	});
	$('#toTop').click(function (e) {
		$('body,html').animate({scrollTop: 0}, 800);
		e.preventDefault();
	});

});
