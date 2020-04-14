$.session.set('some key', 'a value');

$.session.get('some key');
> "a value"

$.session.clear();

$.session.get('some key');
> undefined

$.session.set('some key', 'a value').get('some key');
> "a value"

$.session.remove('some key');

$.session.get('some key');
> undefined