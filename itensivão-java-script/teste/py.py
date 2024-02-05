def arvore(altura):
    stars = 1
    maxColumns = altura * 2 - 1
    for linha in range(altura):
        espacos = (maxColumns - stars) // 2
        print(espacos * " " + stars * "*" + espacos  * " ")
        stars += 2

arvore(30)