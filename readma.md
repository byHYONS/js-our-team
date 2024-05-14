# ESERCIZIO: Our Team

> [!INFO]
>
> nome repo: js-our-team

- Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

### MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

### MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.

### MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe:

### BONUS 1:
Trasformare la stringa foto in una immagine effettiva.

### BONUS 2:
Organizzare i singoli membri in card/schede.

## Svolgimento:
1. definsco una variabile di arrey d'oggetti;

2. definisco variabile per leggere l'elemento del DOM sul quale appenderò le card;

3. faccio un ciclo for...in per iterare l'arrey d'oggetti:
```
for (let key in team){ ... }
```

4. farò il `console.log` di tutti gli elementi del team, così come richiesto dall'esercizio;

5. creo il div dentro al quale costruisco le mie card:
```
    const myCards = document.createElement('div');
    myCards.classList.add('cards');
```

6. creo l'immagine dei membri, poi con gli attributi `.src` e `.alt` faccio una interpolazione richiamando l'immagine e aggiungendo il nome al valore alt:
```
    const myImg = document.createElement('img');
    myImg.src = `./img/${team[key]['foto']}`;
    myImg.alt = team[key]['nome'];
```

7. creo h2 per stampare il nome dei membri con la proprietà `textContent` e interpolando il nome del membro:
```
    const nomeMembro = document.createElement('h2');
    nomeMembro.textContent = `${team[key]['nome']}`;
```

8. creo il p per la descrizione del ruolo sempre utilizzando `textContent` e interpolando il ruolo del membro:
```
    const ruoloMembro = document.createElement('p');
    ruoloMembro.textContent = `${team[key].ruolo}`;
```

9. infine, appendo tutto sui relativi parents:
```
    myCards.append(myImg);
    myCards.append(nomeMembro);
    myCards.append(ruoloMembro);
    containerCards.append(myCards);
```


##### FINE
