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

//TEST 2 START HERE
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

//TEST 2 END HERE

//TEST 3 START HERE
db_add(answers,
	'Укажите значения адресных полей в начальном запросе DHCP-клиента при динамическом назначении адресов DHCP-сервером',
	['IP-адрес назначения -> 255.255.255.255', 'IP-адрес источника -> 0.0.0.0']); //выпадающий список
	
db_add(answers,
	'Укажите протоколы, имеющие указанные свойства. Один протокол может иметь несколько свойств.',
	['DNS -> использование технологии клиент-сервер','DHCP -> использование технологии клиент-сервер','ARP -> использование широковещательного запроса','Ethernet -> обнаружение коллизий','802.11 -> предотвращение коллизий',' -> использование кольцевого маркера','DHCP -> использование широковещательного запроса']); //выпадающий список
	
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
//TEST 3 END HERE

//TEST 4 START HERE FTP
db_add(answers,
	'Укажите номера портов, используемых FTP-клиентом:',
	['FTP-клиент использует любые свободные порты;']);
db_add(answers,
	'Какое из указанных соединений устанавливается последним ?',
	'соединение передачи данных;');
db_add(answers,
	'Верно ли, что во время сессии FTP нельзя вводить команды для локального компьютера ?',
	false);
db_add(answers,
	'Какая команда завершает сеанс, открытый командой OPEN ?',
	'close;');
db_add(answers,
	'Какая программа инициирует обмен данными в активном режиме FTP ?',
	'FTP-сервер;');
db_add(answers,
	'Можно ли в одном сеансе скачать два файла с двух ftp-серверов ?',
	'нет');
db_add(answers,
	'Можно ли в одном сеансе подключиться к двум ftp-серверам ?',
	'можно, если ftp-сервер поддерживает функцию FXP');
db_add(answers,
	'Сколько TCP-соединений использует протокол FTP ?',
	['два;']);
db_add(answers,
	'Какую команду можно использовать для вывода всех команд, поддерживаемых FTP-сервером ?',
	['help;','Вопросительный знак']);
db_add(answers,
	'Какие из приведенных утверждений относятся к функции FXP протокола FTP ?',
	['организует прямой обмен данными между двумя FTP-серверами;','использует два управляющих канала и один канал передачи данных;']);
db_add(answers,
	'Какие из перечисленных протоколов не обеспечивают защиту от несанкционированного доступа ?',
	['FTP;','HTTP;','TELNET;']);
db_add(answers,
	'Можно ли в течение одной сессии FTP три раза открыть канал передачи данных (да/нет) ?',
	'да');
db_add(answers,
	'Какая программа не инициирует обмен данными в пассивном режиме FTP ?',
	'FTP-сервер;');
db_add(answers,
	'Укажите номера портов, используемых FTP-сервером:',
	['21;','20;','FTP-сервер использует любые свободные порты;']);
db_add(answers,
	'С какой файловой системой может работать FTP-клиент ?',
	['файловыми системами удаленного и локального компьютеров;']);
db_add(answers,
	'Сколько UDP-соединений использует протокол FTP ?',
	['UDP-соединение не используется;']);

//TEST 4 END HERE

//TEST 5-7 START HERE SMTP
db_add(answers,
	'Укажите почтовый протокол, соответствующий заданным свойствам',
	['используется почтовым клиентом для передачи письма на сервер -> SMTP','используется почтовым клиентом для получения письма с сервера-> POP3, IMAP','при получении почты письмо перемещается с сервера на клиент -> POP3','при получении почты письмо копируется с сервера на клиент -> IMAP']);
db_add(answers,
	'Укажите номер порта, используемого указанными протоколами',
	['SMTP -> 25','POP3 -> 110','IMAP -> 143']);
db_add(answers,
	'Укажите очередность этапов отправки письма по адресу adr1@mail.ru в схеме с выделенным почтовым сервером',
	['обращение к службе DNS для получения имени почтового сервера домена mail.ru -> 1','обращение к службе DNS для получения IP-адреса почтового сервера домена mail.ru -> 2','установления TCP-соединения с SMTP-сервером -> 3']);
db_add(answers,
	'Какие команды протокола SMTP являются обязательными ?',
	['EHLO','RCPT','MAIL']);
db_add(answers,
	'SMTP-расширение 8BITMIME позволяет…',
	'использовать 8-битные символы только в теле сообщения;');
db_add(answers,
	'Какая команда идентифицирует SMTP-клиента на SMTP-сервере ?',
	'EHLO');
db_add(answers,
	'Какие протоколы использует SMTP-клиент для работы с SMTP-сервером ?',
	['SMTP','DNS']);
db_add(answers,
	'Какой TCP-порт использует SMTP-сервер ?',
	'25');
db_add(answers,
	'Из ответа на какую команду клиент узнает о дополнительных функциях, которые он может использовать при отправке сообщения ?',
	'EHLO');
db_add(answers,
	'Какое количество аргументов принимает команда RCPT ?',
	'один');
db_add(answers,
	'Какие расширения SMTP используются для безопасной передачи сообщений ?',
	['AUTH','STARTTLS']);
db_add(answers,
	'Можно ли с помощью SMTP протокола получить сообщения с SMTP-сервера? (да/нет)',
	'нет');
db_add(answers,
	'Верно ли, что SMTP-сервер всегда является конечным пунктом назначения для сообщения ?',
	false);
//TEST 5-7 END HERE

/*db_add(answers,
	'',
	'');*/

//RTS END HERE-------------
//TEST 1 START HERE Работа с последовательным портом
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
	['стартовый байт; -> 1', 'число с плавающей точкой; -> 2', 'завершающий байт; -> 3', 'контрольная сумма; -> 4']);
//=стартовый байт; -> 1
//=число с плавающей точкой; -> 2
//=завершающий байт; -> 3
//=контрольная сумма; -> 4


//TEST 1 END HERE

//TEST HZ START HERE

db_add(answers,
	'Контроль четности в интерфейсе RS -232 проводится путем\:',
	'добавления к передаваемому байту одного бита;');
db_add(answers,
	'Контроль четности в интерфейсе RS -232 проводится\:',
	'аппаратными средствами;');
db_add(answers,
	'Контрольная сумма – это\:',
	['целое беззнаковое число, значение которого зависит от значения каждого бита передаваемых данных;']);
db_add(answers,
	'Укажите возможные значения размера контрольной суммы\:',
	['8 бит;','1 байт;','2 байта;','4 байта;']);
db_add(answers,
	'При вычислении контрольной суммы\:',
	'стартовый и конечный байты отбрасываются;');
db_add(answers,
	'Укажите особенности алгоритма вычисления простой контрольной суммы \:',
	['для суммирования используется операция «исключающее ИЛИ»;','размер суммы составляет 1 байт;','не используется циклический сдвиг битов;']);
db_add(answers,
	'Укажите особенности алгоритма вычисления LRC \:',
	['размер суммы составляет 1 байт;','не используется циклический сдвиг битов;','для суммирования используется операция сложения байтов;']);
db_add(answers,
	'Укажите особенности алгоритма вычисления CRC -16\:',
	['для суммирования используется операция «исключающее ИЛИ»;','размер суммы составляет 2 байта;','используется циклический сдвиг битов;']);
db_add(answers,
	'Число циклических сдвигов в алгоритме вычисления CRC -16 равно\:',
	'восемь;');
db_add(answers,
	'Какой размер имеет контрольная сумма CRC -16\:',
	'2 байта;');
db_add(answers,
	'Какой метод дает меньшую вероятность распознавания ошибки в передаваемых данных\:',
	'применение контроля четности;');
db_add(answers,
	'При увеличении разрядности контрольной суммы вероятность распознавания ошибки\:',
	'увеличивается;');
db_add(answers,
	'Как исключить переполнение при вычислении простой контрольной суммы на языке Паскаль?',
	['использовать опцию компилятора $R- ;','использовать обработку исключений (TRY-EXCEPT-END) ;']);
db_add(answers,
	'С помощью какой операции проводится побитный сдвиг при расчете CRC -16 ?',
	'shr;');
db_add(answers,
	'Алгоритм вычисления какой контрольной суммы начинается с присвоения результату значения $ FFFF ? ',
	'CRC-16;');
db_add(answers,
	'При передаче бинарным протоколом целого числа 13 из-за воздействия помехи на приемном конце принято число 14. Какие методы контроля не распознают такую ошибку ?',
	'контроль четности;');
db_add(answers,
	'В интерфейсе RS-232 включен контроль нечетного паритета. Какое значение будет иметь бит четности при передаче следующего байта 10110110 ?',
	'ноль');

//TEST HZ END HERE

//TEST 2 START HERE Механизмы сообщений QNX
db_add(answers,
	'Каков размер кода импульса (в битах)?',
	'8');
db_add(answers,
	'Какой поток устанавливает соединение:',
	'Клиент');
db_add(answers,
	'Механизм обмена сообщениями в QNX определяется',
	false);
db_add(answers,
	'Какой объем данных можно передать с помощью импульса ?',
	['40 битов']);
db_add(answers,
	'Укажите основные свойства импульса:',
	['ставится в очередь, если получатель не заблокирован в ожидании сообщения','для отправителя является не блокирующим','может быть получен как стандартное сообщение','может перенести 40 битов данных']);
db_add(answers,
	'Какой поток создает канал для соединения ?',
	'Сервер');
db_add(answers,
	'Какие функции из нижеперечисленных являются блокирующими?',
	['MsgReceivePulse()','MsgReceive()','MsgSend()','MsgSendPulse()']);
db_add(answers,
	'Для установки соединения клиенту нужно знать:',
	['Номер канала (Channel ID)','PID-процесса, содержащего поток сервер','Дескриптор узла сети, на котором выполняется поток-сервер']);
db_add(answers,
	'Возможна ли передача сообщений без создания канала ?',
	false);
db_add(answers,
	'Укажите правильную очередность вызовов функций в потоке - сервере для обмена сообщениями (если функция не должна использоваться, то укажите ноль)',
	['ChannelCreate()-> 1','MsgSend() -> 0','ChannelDestroy() -> 4','MsgReply() -> 3','ConnectAttach()-> 0','MsgReceive()-> 2']);
db_add(answers,
	'Индекс локального узла в сети равен:',
	'Нулю');
db_add(answers,
	'Возможен ли обмен сообщениями между процессами на разных узлах сети ?',
	false);
db_add(answers,
	'При поступлении на канал импульса сервер прекращает обработку ранее поступившего сообщения ?',
	false);
db_add(answers,
	'Как при приеме сообщения функцией MsqReceive () отличить обычное сообщение от импульса?',
	['С помощью идентификатора сообщения, который возвращает эта функция']);
db_add(answers,
	'Механизм обмена сообщениями в QNX определяется стандартом POSIX и работает в большинстве ОC:	',
	true);
db_add(answers,
	'В какие видах блокировок может находиться поток - клиент ?',
	['receive','send']);
db_add(answers,
	'',
	'');
db_add(answers,
	'',
	'');
	
//TEST 2 END HERE

//TEST 3 START HERE Taймеры QNX
db_add(answers,
	'Таймер отсчитывается ядром по ...',
	'системным тикам');
db_add(answers,
	'Для относительного таймера ...',
	'время задается от текущего времени');
db_add(answers,
	'Уведомление о срабатывании таймера возможно с помощью:',
	['импульса', 'создания нового потока', 'сигнала']);
db_add(answers,
	'При срабатывании тайм-аута на блокировку, поток ...',
	'Продолжает выполнение');
db_add(answers,
	'Длина системного тика для современных процессоров составляет ...',
	'1 мсек');
db_add(answers,
	'Для установки тайм-аута ядра на несколько типов блокировки (сочетание нескольких флагов) используется операция ...',
	'ИЛИ |');
db_add(answers,
	'Совместимы ли механизмы таймеров ОС QNX и других POSIX-совместимых ОС ?',
	true);
db_add(answers,
	'Значение системного тика можно получить с помощью функции ...',
	'clock_getres()');
db_add(answers,
	'Установка параметра it_interval, задающего время, через которое таймер будет циклично срабатывать повторно после первого срабатывания таймера, в ноль приведет к ....',
	'Установке однократного таймера');

//TEST 3 END HERE

//TEST 4 START HERE Синхронизация потоков QNX
db_add(answers,
	'Как называется участок кода, защищенный мутексом от совместного выполнения потоками ?',
	'критическая секция');
db_add(answers,
	'Какие операции возможны над внутренним счетчиком семафора ?',
	['инкремент','декремент']);
db_add(answers,
	'Какие из нижеперечисленных функций предназначены для работы с именованными семафорами ?',
	['sem_unlink()','sem_open()','sem_timedwait()','sem_wait()','sem_close()']);
db_add(answers,
	'Сколько потоков одновременно могут владеть мутексом?',
	'один');
db_add(answers,
	'Имеет ли семафор владельца ?',
	false);
db_add(answers,
	'Какие из нижеперечисленных функций предназначены для работы с неименованными семафорами ?',
	['sem_timedwait()','sem_init()','sem_wait()']);
db_add(answers,
	'Укажите очередность вызова функций при работе с мутексом:',
	['phtread_mutex_init() -> 1','phtread_mutex_lock() -> 2','phtread_mutex_unlock() -> 3','phtread_mutex_destroy() -> 4']);
db_add(answers,
	'Являются ли механизмы синхронизации ОС QNX несовместимыми со стандартом POSIX ?',
	false);
db_add(answers,
	'Как называется семафор, позволяющий связывать любые процессы системы, в том числе и по сети?',
	'именованный');
db_add(answers,
	'Как называется взаимная блокировка потоков, при которой они уже не разблокируются ?',
	'deadlock');
db_add(answers,
	'Вызов потоком функции sem_wait() при нулевом значении счетчика, приведет к тому, что поток...',
	'заблокируется');
db_add(answers,
	'Условная переменная должна использоваться совместно с ...',
	'мутексом');
db_add(answers,
	'Найти соответствие в определениях:',
	['Семафор -> счетчик, используемый для синхронизации; если счетчик равен нулю, то поток блокируется.','Мутекс -> обеспечивает исключительный доступ потоков к разделяемым данным.','Условная переменная -> блокирует поток до тех пор, пока соблюдается некоторое условие.','Барьер -> устанавливает точку остановки для группы взаимодействующих потоков']);
db_add(answers,
	'Если поток вызывает функцию pthread_mutex_lock() при занятом мутексе, то этот поток:',
	'блокируется');
db_add(answers,
	'При разблокировании потока на условной переменной, поток...',
	'пытается захватить критическую секцию, в которой находится условная переменная');
db_add(answers,
	'Может ли мутекс быть разблокирован потоком - не владельцем этого мутекса ?',
	false);
db_add(answers,
	'Может ли семафор быть разблокирован потоком - не владельцем этого семафора ?',
	true);
db_add(answers,
	'',
	'');

//TEST 4 END HERE 

//TEST 5 START HERE Среда разработки QNX Momentics
db_add(answers,
	'Как называется хранилище, где CVS-сервер хранит текущую версию проекта и историю изменений ?',
	'Репозиторий');
db_add(answers,
	'Должны ли совпадать учетные записи пользователей QNX с учетными записями пользователей CVS для корректной работы сервера CVS ?',
	'нет');
db_add(answers,
	'Представление IDE Momentics- это :',
	'Элемент среды разработки, позволяющий отображать ресурс в логическом виде');
db_add(answers,
	'Установите соответствие в свойствах методов профилирования IDE Momentics:',
	['Сбор информации о работе приложения происходит через равные интервалы времени и добавляется информация о количестве вызовов функций->Sampling and Call Count instrumentation profiling','Сбор информации о работе приложения происходит через равные интервалы времени->Sampling','Измеряется время работы каждой функции приложения->Function Instrumentation profiling']);
db_add(answers,
	'CVS поддерживает одновременную работу с проектом только одного программиста ?',
	false);
db_add(answers,
	'Перспектива - это :',
	'Набор редакторов и представлений, оптимизированный для выполнения какой-либо специализированной задачи');
db_add(answers,
	'Среда QNX Momentics позволяет разрабатывать программы только для одной аппаратной платформы ?',
	false);
db_add(answers,
	'Профилирование - это:',
	'Измерение времени исполнения как всей программы в целом, так и отдельных ее фрагментов');
db_add(answers,
	'Файл, описывающий правила построения исполняемого файла называется ...',
	'Makefile');
db_add(answers,
	'С какой целью исполняется Check-out процедура ?',
	'Для получения от CVS-сервера нужной версии проекта');
db_add(answers,
	'Модуль с точки зрения CVS — это :',
	'Блок информации, который запрашивается пользователем');
db_add(answers,
	'Информация о целевой платформе в IDE Momentics предоставляется ...',
	'Программой qconn');
db_add(answers,
	'С какой целью в исполняемый файл включается отладочная информация ?',
	'Позволяет отладчику узнать, какие адреса соответствуют строкам в исходном файле');
db_add(answers,
	'Какая версия исполняемого файла имеет больший размер ?',
	'Debug - версия');	
//TEST 5 END HERE

//TEST 6 START HERE Планировщики СРВ.
db_add(answers,
	'Какие из перечисленных допущений положены в основу алгоритма RMS ?',
	['приоритеты у всех задач должны иметь различные значния;', 'задаче требуется одинаковое процессорное время на каждом периоде;','задача должна быть завершена за время ее периода;','задачи являются независимыми;']);
db_add(answers,
	'Какая теорема дает более достоверный критерий для оценки планируемости группы задач алгоритмом RMS ?',
	'теорема о времени завершения;');
db_add(answers,
	'Какие из перечисленных свойств имеет алгоритм EDF ?',
	['может работать только с периодическими задачами;','задачи являются независимыми;','время использования процессора задачами на каждом периоде должно быть постоянным;','каждая задача должна быть завершена за время ее периода;']);
db_add(answers,
	'Какие параметры задач учитывает алгоритм монотонных частот ?',
	['период запуска;','максимальное время выполнения;']);
db_add(answers,
	'Момент времени, когда планировщик должен принять решение о выделении процессорного времени, называется ...',
	'точка планирования');
db_add(answers,
	'Какому типу планировщиков соответствует указанные свойства:',
	['план составляется на этапе выполнения задач -> динамический','возможностьь использования дополнительных условий планирования -> динамический','приоритет задач не изменяется на этапе их выполнения -> статический','приоритет задач может изменяться на этапе их выполнения -> динамический','план составляется до выполнения задач -> статический']);
db_add(answers,
	'Когда запускается невытесняющий алгоритм EDF ?',
	['при завершении очередной задачи;','при запуске новой задачи;']);
db_add(answers,
	'При увеличении числа задач, обрабатываемых алгоритмом RMS, верхняя граница коэффициента использования процессора ...',
	'уменьшается');
db_add(answers,
	'коэффициент использования процессора задачей - это ...',
	'отношение времени выполнения задачи к её периоду запуска;');
db_add(answers,
	'Какая из перечисленных ситуаций является наиболее тяжелой для планировщика ?',
	'все задачи одновременно переходят в состояние готовности;');
db_add(answers,
	'Задача называется планируемой, если ...',
	['её исполнение завершается до истечения её периода']);
db_add(answers,
	'Может ли быть планируемой группа задач, в которой суммарный коэффициент использования процессора превышает значение, определенное по теореме о верхней границе ?',
	'Да');
db_add(answers,
	'Какую структуру данных использует алгоритм EDF для обработки задач ?',
	'очередь, отсортированная по возрастанию крайнего срока;');
db_add(answers,
	'Алгоритм RMS назначает задачам приоритет ...',
	'обратно пропорционально времени их выполнения;');

//TEST 6 END HERE

//TEST HZ START HERE

db_add(answers,
	'Укажите максимальное число узлов сети с заданным значением маски\:',
	['255.255.255.0 -> 254','255.255.255.128 -> 126','255.255.255.192 -> 62','255.255.255.224 -> 30']);
db_add(answers,
	'Укажите особенности метода доступа к среде передачи данных для технологии Ethernet\:',
	['узел обязан прослушивать разделяемую среду;','если в течение времени передачи кадра не произошла коллизия, то кадр считается переданным успешно;']);
db_add(answers,
	'Укажите назначение алгоритма покрывающего дерева.',
	['для автоматического построения связной топологии без петель','для автоматического перехода на резервные связи при отказе узлов или основных линий связи']);
db_add(answers,
	'На рисунке приведен результат команды ping для узла yandex.ru. Сколько промежуточных узлов прошел IP-пакет ?',
	'6');
db_add(answers,
	'Коллизия в сети Ethernet - это ...',
	'взаимное искажение кадров, отправленных почти одновременно несколькими\nузлами сети');
db_add(answers,
	'Какая технология реализована на основе стека протоколов 802.11',
	'Wi-Fi');
db_add(answers,
	'Фильтрация кадра в коммутаторе - это ...',
	'удаление кадров из входного буфера, если адрес получателя и адрес отправителя находятся в одном сегменте сети;');
db_add(answers,
	'ICMP-сообщение об ошибке не посылается, если ошибка возникла при передаче IP-пакета, ...',
	['несущего ICMP-запрос','упакованного в кадр в кадр с широковещательным MAC-адресом']);
db_add(answers,
	'Кому адресовано ICMP-сообщение ?',
	'протоколу IP узла-отправителя пакета, вызвавшего ошибку');
db_add(answers,
	'Может ли работать маршрутизатор, не имея таблицы маршрутизации ?',
	['может, если маршрутизация выполняется от источника','может, если в маршрутизаторе задан маршрут по умолчанию']);
db_add(answers,
	'',
	'');
db_add(answers,
	'',
	'');


	
function db_add(db, q, a) {
    let ans;
    if (a === true || a === false) ans = a;
    else if (Array.isArray(a)) ans = a.map(x => clear_text(x));
    else ans = clear_text(a);
    return db[clear_text(q)] = ans;
}

function clear_text(text) {
    return text.toLowerCase().replace(/[^а-яa-z0-9\-\>]/g,'');
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
