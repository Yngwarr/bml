let answers = {};

//db_add(answers,
    //'Укажите имя команды, с помощью которой можно определить количество маршрутизаторов на пути от Вашего компьютера к заданному Web-сайту ?',
    //'traceroute');

//db_add(answers,
    //'Какие действия предусмотрены протоколом ICMP при потере ICMP - пакета ?',
    //'формирование нового ICMP - пакета, содержащего сообщение о потере;');

//db_add(answers,
    //'Какие поля входят в структуру ICMP-сообщения ?',
    //['длина сообщения', 'тип сообщения', 'контрольная сумма']);

//db_add(answers,
    //'Верно ли, что обработка ICMP-сообщения не входит в обязанности протоколов IP или ICMP ?',
    //false);
//TEST 1 START HERE
db_add(answers,
	'Какой протокол позволяет компьютерам автоматически получать IP-адрес ?',
	'DHCP');
	
db_add(answers,
	'Какой протокол позволяет маршрутизаторам динамически обновлять маршрутную информацию ?',
	'RIP');
	
db_add(answers,
	'Какой протокол предназначен для преобразования IP-адресов в MAC-адреса ?',
	'ARP');

db_add(answers,
	'Какое устройство называют многопортовым повторителем ?',
	'концентратор');
	
db_add(answers,
	'По какой линии происходит передача сигнала по методу "точка-точка" ?',
	'витая пара');
	
db_add(answers,
	'В какой топологии выход из строя одного узла сети не повлияет на работу сети в целом ?',
	['звезда','общая шина']);
	
db_add(answers,
	'Какие функции не может выполнять концентратор ?',
	['фильтрация сетевого трафика']);
	
db_add(answers,
	'Какие уровни модели OSI являются сетезависимыми ?',
	['физический', 'канальный', 'сетевой']);

db_add(answers,
	'Сколько хостов может иметь сеть, которая имеет значение маски <b>255.255.192.0</b> ?',
	'16382');
	
db_add(answers,
	'Какие из нижеперечисленных проблем может устранить концентратор ?',
	['большое количество узлов', 'отсутствие кабеля достаточной длины']);

db_add(answers,
	'Какую метрику использует для нахождения лучшего пути протокол RIP ?',
	'количество переходов');

db_add(answers,
	'Какие из нижеперечисленных атрибутов использует маршрутизатор для передачи пакетов по сети ?',
	['сетевой адрес', 'хост-машины']);
	
db_add(answers,
	'Как распространяются сигналы по сети с топологией "общая шина" ?',
	['сигнал всегда движется в обоих направлениях от источника']);
	
db_add(answers,
	'Что использует маршрутизатор для выбора пути следования пакета ?',
	'таблица маршрутизации');
	
db_add(answers,
	'Если сетевая часть IP-адреса отправителя и получателя не совпадают, то для отправки пакета надо использовать ...',
	'маршрутизатор');

db_add(answers,
	'Верно ли, что при увеличении длины маски сети уменьшается количество узлов этой сети ?',
	true);
	
db_add(answers,
	'Верно ли, что при уменьшении длины маски сети увеличивается количество узлов этой сети ?',
	true);	
	
//TEST 1 END HERE

//TEST 2_1 START HERE
db_add(answers,
	'Укажите основное назначение функции ExpertInfo:',
	'отображение перехваченных пакетов по группам;');
	
db_add(answers,
	'Укажите назначение функции Protocol Hierarhy:',
	'сборка статистики по протоколам;');
	
db_add(answers,
	'Укажите назначение функции Follow (TCP|UDP|SSL) Stream:',
	'сборка пакетов одной сессии;');
	
db_add(answers,
	'Укажите назначение меню Statistics-> Conversations',
	'отображение информации об участниках связи;');
	
db_add(answers,
	'Укажите назначение функции IO Graphs:',
	'позволяет построить статистический график по захваченным данным;');

db_add(answers,
	'Какие группы пакетов поддерживает функция ExpertInfo?',
	['все предложенные варианты;']);
	
db_add(answers,
	'Какие из перечисленных протоколов являются служебными?',
	['ICMP', 'ARP', 'DHCP']);
	
db_add(answers,
	'Укажите назначение протокола ICMP',
	['для передачи информации об ошибках в дейтаграммах;']);

db_add(answers,
	'Какие программы используют протокол ICMP?',
	['ping', 'tracert']);
	
db_add(answers,
	'Укажите назначение протокола DHCP',
	['для автоматического получения IP-адреса и других параметров;']);
	
db_add(answers,
	'Укажите назначение протокола NAT',
	['для преобразования IP-адреса транзитных пакетов;']);

db_add(answers,
	'Диаграмма FlowGraph ...',
	'отображает историю обмена пакетами;');

db_add(answers,
	'К какому типу относится MAC-адрес 01-80-С2-00-00-08?',
	['групповой', 'централизованный']);
	
db_add(answers,
	'К какому типу относится MAC-адрес 01-80-С2-00-00-08, записанный в канонической нотации ?',
	['групповой', 'централизованный']);

db_add(answers,
	'Централизованный MAC-адрес сетевого интерфейса назначается ...',
	['производителем оборудования']);
	
db_add(answers,
	'Локальный MAC-адрес сетевого интерфейса не назначается ...',
	['производителем оборудования;', 'руководителем организации;', 'пользователем компьютера;']);

db_add(answers,
	'На каком уровне модели OSI используются MAC-адреса?',
	'канальный;');

//TEST 2_1 END HERE

//TEST 2_2 START HERE
db_add(answers,
	'Укажите значения адресных полей в начальном запросе DHCP-клиента при динамическом назначении адресов DHCP-сервером',
	''); //выпадающий список
	
db_add(answers,
	'Укажите протоколы, имеющие указанные свойства. Один протокол может иметь несколько свойств.',
	''); //выпадающий список
	
db_add(answers,
	'Какие из перечисленных протоколов относятся к канальному уровню ?',
	['Ethernet','802.11','Token Ring','STP']);
	
db_add(answers,
	'Какой протокол изменяет значение параметра TTL ?',
	'IP');

db_add(answers,
	'Какой из указанных протоколов имеет максимальный уровень инкапсуляции ?',
	'Ethernet;');
	
db_add(answers,
	'Сколько надо иметь DHCP-серверов для обслуживания сети, разделенной двумя маршрутизаторами ?',
	['один, при наличии DHCP-агентов;','два;']);
	
db_add(answers,
	'Какие из перечисленных протоколов относятся к сетевому уровню ?',
	['RIP', 'ICMP', 'IP']);
	
db_add(answers,
	'Какие из перечисленных протоколов относятся к транспортному уровню ?',
	['UDP', 'TCP']);
	
db_add(answers,
	'Какие из перечисленных протоколов относятся к прикладному уровню ?',
	['POP3', 'FTP', 'SMTP']);
	
db_add(answers,
	'На\nоснове какой библиотеки работает <span lang\="EN-US">WireShark ?</span><br>',
	'PCAP;');

db_add(answers,
	'На основе какой библиотеки работает WireShark',
	'PCAP;');
	
db_add(answers,
	'В анализаторе WireShark установлен фильтр "ip.addr\=\=10.0.0.5". Что будет выведено в окно захваченных пакетов ?',
	'все пакеты, в которых встречается IP-адрес 10.0.0.5;');

db_add(answers,
	'В анализаторе WireShark установлен фильтр "ip.addr==10.0.0.5". Что будет выведено в окно захваченных пакетов ?',
	'все пакеты, в которых встречается IP-адрес 10.0.0.5;');
	
db_add(answers,
	'В IP-пакете в поле "Длина заголовка" находится значение 0x5. Чему равна длина заголовка ?',
	'20 байтов;');
	
db_add(answers,
	'Основное назначение протокола ICMP - это \:',
	'передача сообщений об ошибках и других исключительных ситуациях, возникающих при передаче данных;');
	
db_add(answers,
	'Может ли IP-адрес компьютера изменяться с течением времени ?',
	'да');
//TEST 2_2 END HERE

//TEST 3-5 START HERE

//TEST 3-5 END HERE

//TEST 6 START HERE

//TEST 6 END HERE
//RTS END HERE-------------
//TEST 1 START HERE
db_add(answers,
	'Порт ввода-вывода - это :',
	'нумерованный путь, по которому передаются данные между процессором и программно-доступными элементами контроллера;');
	
db_add(answers,
	'Аппаратный порт – это :',
	'разъем на системном блоке, к которому подключаются внешние устройства;');
	
db_add(answers,
	'Сетевой порт – это :',
	'параметр протокола TCP;');
	
db_add(answers,
	'Какие из нижеперечисленных портов являются последовательными :',
	['COM;', 'PS/2;', 'USB;', 'IEE1394;']);
	
db_add(answers,
	'Адрес порта ввода-вывода – это :',
	'логический номер порта, представленный двухбайтовым целым беззнаковым числом;');
	
db_add(answers,
	'Базовый адрес порта COM 2 хранится по адресу :',
	'1026;');
	
db_add(answers,
	'Укажите основные свойства синхронной передачи данных :',
	['пакет данных передается через заранее установленный интервал времени независимо от состояния приемника;','программное управление передачей данных;']);
	
db_add(answers,
	'Укажите основные свойства асинхронной передачи данных :',
	['программное управление передачей данных;', 'пакет данных передается только тогда, когда приемник выставляет флаг готовности к приему;', 'передатчик проводит периодический опрос приемника о готовности;']);
	
db_add(answers,
	'Укажите основные свойства передачи данных по прерыванию :',
	['приемник посылает сигнал готовности контроллеру прерываний, после чего начинается передача ему очередного пакета данных;', 'аппаратное управление передачей данных;']);
	
db_add(answers,
	'Укажите основные свойства последовательной передачи данных :',
	['передача проводится по одной линии;', 'каждый бит данных передается поочередно;']);
	
db_add(answers,
	'Укажите основные свойства параллельной передачи данных :',
	['передача проводится по нескольким линиям;', 'все биты каждого байта передаются одновременно;']);
	
db_add(answers,
	'Укажите основные свойства протокола ASCII :',
	['каждый байт интерпретируется как символ;', 'при передаче числовых данных значительно увеличивается объем передаваемых данных;']);
	
db_add(answers,
	'Укажите основные свойства бинарного протокола :',
	['последовательность байтов интерпретируется как число заданного типа, представленное в заданном внутреннем формате;', 'при передаче числовых данных объем передаваемых данных не увеличивается;']);
	
db_add(answers,
	'При включенном контроле четности и нечетном паритете число единиц в передаваемом байте должно быть :',
	'нечетным;');
	
db_add(answers,
	'Определите степень эффективности бинарного протокола в сравнении с ASCII – протоколом (без учета служебных байтов) при передаче вещественного числа одинарной точности 5482,279:',
	'2');
	
db_add(answers,
	'Какой способ обмена данными поддерживает COM – порт :',
	'асинхронный');
	
db_add(answers,
	'Укажите основные свойства интерфейса RS-232 :',
	['имеет плохую помехозащищенность;', 'является несимметричным интерфейсом;']);
	
db_add(answers,
	'Может ли порт занимать в пространстве ввода – вывода несколько байтов ?',
	'да;');
	
db_add(answers,
	'Базовый адрес порта – это :',
	'начальный адрес участка пространства ввода – вывода, выделенного для проведения обменных операций с устройством;');
	
db_add(answers,
	'Укажите основные свойства интерфейса RS-485 :',
	['является симметричным интерфейсом;', 'имеет хорошую помехозащищенность;', 'использует дифференциальную передачу данных;']);
	
db_add(answers,
	'Укажите очередность следования элементов пакета передаваемых данных при использовании бинарного протокола :',
	'');
//=стартовый байт; -> 1
//=число с плавающей точкой; -> 2
//=завершающий байт; -> 3
//=контрольная сумма; -> 4


//TEST 1 END HERE
//TEST 2 START HERE
//TEST 2 END HERE
//TEST 3 START HERE
//TEST 3 END HERE
//TEST 4 START HERE
//TEST 4 END HERE
//TEST 5 START HERE
//TEST 5 END HERE

	
function db_add(db, q, a) {
    let ans;
    if (a === true || a === false) ans = a;
    else if (Array.isArray(a)) ans = a.map(x => clear_text(x));
    else ans = clear_text(a);
    return db[clear_text(q)] = ans;
}

function clear_text(text) {
    return text.toLowerCase().replace(/[^а-яa-z0-9]/g,'');
}

function input_type(type) {
    return !!document.querySelector(`.answer input[type='${type}']`);
}

function main() {
	let t = document.querySelector(".qtext");
    let q = clear_text(t.innerText);
	let opts;
	console.log(answers[q]);
	
    let q_type = '';
    if (input_type('checkbox')) q_type = 'checkbox';
    else if (input_type('radio')) q_type = 'radio';
    else if (input_type('text')) q_type = 'text';
    else { console.error('dunno what type of question it is'); return; }
    console.log(`question type is ${q_type}`);


    
    
    switch (q_type) {
        case 'text':
            document.querySelector(`.answer input[type='text']`).value = answers[q];
            break;
        case 'radio':
            opts = document.querySelectorAll(`.answer input[type='radio']`);
            opts.forEach(el => {
                let cans = clear_text(el.labels[0].innerText);
                if (answers[q] === true || answers[q] === false) {
                    if ((answers[q] && cans === 'верно') || (!answers[q] && cans === 'неверно')) {
                        el.click();
                    }
				} else {
                    if (cans.includes(answers[q])) {
                        el.click();
                    }
                }
            });
            break;
        case 'checkbox':
			opts = document.querySelectorAll(`.answer input[type='checkbox']`);
            opts.forEach(el => {
                let cans = clear_text(el.labels[0].innerText);
                for (let i = 0; i < answers[q].length; ++i) {
                    if (cans.includes(answers[q][i])) {
                        el.click();
                        break;
                    }
                }
            });
            break;
    }
}

console.log('injecting...');
main();
