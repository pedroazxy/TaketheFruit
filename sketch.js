
var x = 220
var y = 453
var ret1 = 70
var ret2 = 370
var Cont = 0
var cont = 0
let img;
var imz;
let imt;
var imb
var delaytime = 1
var tela = 0
var numerox
var numeroy
var xnumero
var ynumero
var imy
var imr
var screen_frameCount
var wait=0
bolax = 90
bolay = 35
bolax1 = 180
bolay1 = 70
bolax2 = 270
bolay2 = 90
bolax3 = 220
bolay3 = 120
bolax4 = 410
bolay4 = 15
bolax5 = 50
bolay5 = 22
bolax6 = 110
bolay6 = 37
bolax7 = 24
bolay7 = 71
bolax8 = 150
bolay8 = 33
bolax9 = 341
bolay9 = 22
bolax10 = 325
bolay10 = 110
bolax11 = 309
bolay11 = 50
bolax12 = 367
bolay12 = 55
bolax13 = 400
bolay13 = 88
bolax14 = 39
bolay14 = 30
bolax15 = 270
bolay15 = 130
bolax16 = 340
bolay16 = 100
bolax17 = 55
bolay17 = 35
bolax18 = 221
bolay18 = 77
bolax19 = 145
bolay19 = 15
bolax20 = 155
bolay20 = 33
bolax21 = 211
bolay21 = 34
bolax22 = 301
bolay22 = 35
bolax23 = 221
bolay23 = 77
bolax24 = 140
bolay24 = 77
bolax25 = 91
bolay25 = 57
bolax26 = 61
bolay26 = 17
bolax27 = 20
bolay27 = 66
bolax28 = 200
bolay28 = 150
bolax29 = 401
bolay29 = 22
bolax30 = 301
bolay30 = 34
bolax31 = 101
bolay31 = 10
bolax32 = 181
bolay32 = 24
bolax33 = 191
bolay33 = 77
bolax34 = 201
bolay34 = 77
bolax35 = 301
bolay35 = 77
bolax36 = 331
bolay36 = 37
bolax37 = 321
bolay37 = 25
bolax38 = 121
bolay38 = 10
bolax39 = 233
bolay39 = 55
bolax40 = 312
bolay40 = 44
volax1 = 180
volay1 = 70
volax2 = 270
volay2 = 90
volax3 = 220
volay3 = 120
volax4 = 410
volay4 = 15
volax5 = 50
volay5 = 22
volax6 = 110
volay6 = 37
volax7 = 24
volay7 = 71
volax8 = 150
volay8 = 33
volax9 = 341
volay9 = 22
volax10 = 325
volay10 = 110
volax11 = 309
volay11 = 50
volax12 = 367
volay12 = 55
volax13 = 400
volay13 = 88
volax14 = 39
volay14 = 30
volax15 = 270
volay15 = 130
volax16 = 340
volay16 = 100
volax17 = 55
volay17 = 35
volax18 = 221
volay18 = 77
volax19 = 221
volay19 = 77
volax20 = 221
volay20 = 77
volax21 = 221
volay21 = 77


function preload() {
  img = loadImage('Pepin.png');
  imt = loadImage('MENUMAIN.png');
  imz = loadImage('Apinha4.png');
  ima = loadImage('FASE2.png');
  imp = loadImage('me3.png')
  imb = loadImage("UVA1.png")
  imr = loadImage("parabens2.png")
  imy = loadImage("game over3.png")
  iml=  loadImage("seta.png")
}

function setup() {
  createCanvas(700, 620);
  numerox = parseInt(random(0, 9))
  numeroy = parseInt(random(0, 9))
  xnumero = parseInt(random(0, 9))
  ynumero = parseInt(random(0, 9))
}

function draw() {
  background(220)
  if (tela == 0) {
    image(imt, 0, 0)
    fill(220)
    textSize(40);
    fill(0, 0, 255)
    textSize(25)
    rect(ret1, ret2, 155, 45)
    fill(255, 0, 0)
    text("Pressione SPACE\npara jogar", 80, 270)
    fill(255, 234, 0)
    text("Instruções", 80, 400)
    fill(0, 234, 0)
    text("Créditos", 80, 500)
  }
  if (keyIsDown(DOWN_ARROW) && ret2 == 370) {
    ret2 = ret2 + 100
  }
  if (keyIsDown(UP_ARROW) && ret2 == 470) {
    ret2 = ret2 - 100
  }
  if (keyIsDown(ENTER) && ret2 == 370) {
    tela = 2
  } else if (keyIsDown(ENTER) && ret2 == 470) {
    tela = 3
  }
  if (keyIsDown(32)) {
    screen_frameCount = frameCount
    tela = 1
  }
  if (tela == 1) {
  fill(255, 0, 0)
  background(220)
  image(ima, 0, 0)
  image(img, x, y)
  fill(255)
  if (keyIsDown(RIGHT_ARROW)) {
    if (x > 660){
      x = 660
    }
      x = x + 8
    }
    if (keyIsDown(LEFT_ARROW)) {
      if (x < 5){
        x = 5
      }
      x = x - 8
    }
    if (keyIsDown(UP_ARROW)) {
      if (y < 453){
        y = 453
      }
      y = y - 3
    }
    if (keyIsDown(DOWN_ARROW)) {
      if (y > 450){
        y = 450
      }
      y = y + 3
    }
    wait+=1
    if (keyIsDown(16) && wait>30) {
      Cont = Cont - 1
      wait=0
    }
    if (frameCount - screen_frameCount >= 200) {
      image(imz, bolax, bolay)
      bolax = bolax + random(-1, 1);
      bolay = bolay + 2;
    }
    if (dist(bolax, bolay, x, y) < 50) {
      fill(51)
      image(imz, bolax, bolay)
      Cont++
      bolax = 600
      bolay = 1000
    }
    text("Frutas: " + Cont, 300, 250)
    image(imz, bolax1, bolay1)
    if (frameCount - screen_frameCount >= 300) {
      bolax1 = bolax1 + random(-1, 1);
      bolay1 = bolay1 + 3;
    }
    image(imz, bolax2, bolay2)
    if (frameCount - screen_frameCount >= 400) {
      bolax2 = bolax2 + random(-1, 1);
      bolay2 = bolay2 + 2;
    }
    image(imz, bolax3, bolay3)
    if (frameCount - screen_frameCount >= 500) {
      bolax3 = bolax3 + random(-1, 1);
      bolay3 = bolay3 + 4;
    }
    image(imz, bolax4, bolay4)
    if (frameCount - screen_frameCount >= 600) {
      bolax4 = bolax4 + random(-1, 1);
      bolay4 = bolay4 + 2;
    }
    image(imz, bolax5, bolay5)
    if (frameCount - screen_frameCount >= 320) {
      bolax5 = bolax5 + random(-1, 1);
      bolay5 = bolay5 + 3;
    }
    image(imz, bolax6, bolay6)
    if (frameCount - screen_frameCount >= 340) {
      bolax6 = bolax6 + random(-1, 1);
      bolay6 = bolay6 + 3;
    }
    image(imz, bolax7, bolay7)
    if (frameCount - screen_frameCount >= 380) {
      bolax7 = bolax7 + random(-1, 1);
      bolay7 = bolay7 + 3;
    }
    image(imz, bolax8, bolay8)
    if (frameCount - screen_frameCount >= 460) {
      bolax8 = bolax8 + random(-1, 1);
      bolay8 = bolay8 + 3;
    }
    image(imz, bolax9, bolay9)
    if (frameCount - screen_frameCount >= 435) {
      bolax9 = bolax9 + random(-1, 1);
      bolay9 = bolay9 + 3;
    }
    image(imz, bolax10, bolay10)
    if (frameCount - screen_frameCount >= 515) {
      bolax10 = bolax10 + random(-1, 1);
      bolay10 = bolay10 + 3;
    }
    image(imz, bolax11, bolay11)
    if (frameCount - screen_frameCount >= 500) {
      bolax11 = bolax11 + random(-1, 1);
      bolay11 = bolay11 + 3;
    }
    image(imz, bolax12, bolay12)
    if (frameCount - screen_frameCount >= 330) {
      bolax12 = bolax12 + random(-1, 1);
      bolay12 = bolay12 + 3;
    }
    image(imz, bolax13, bolay13)
    if (frameCount - screen_frameCount >= 410) {
      bolax13 = bolax13 + random(-1, 1);
      bolay13 = bolay13 + 3;
    }
    image(imz, bolax14, bolay14)
    if (frameCount - screen_frameCount >= 630) {
      bolax14 = bolax14 + random(-1, 1);
      bolay14 = bolay14 + 3;
    }
    image(imz, bolax14, bolay14)
    if (frameCount - screen_frameCount >= 550) {
      bolax14 = bolax14 + random(-1, 1);
      bolay14 = bolay14 + 3;
    }
    image(imz, bolax15, bolay15)
    if (frameCount - screen_frameCount >= 570) {
      bolax15 = bolax15 + random(-1, 1);
      bolay15 = bolay15 + 3;
    }
    image(imz, bolax16, bolay16)
    if (frameCount - screen_frameCount >= 250) {
      bolax16 = bolax16 + random(-1, 1);
      bolay16 = bolay16 + 3;
    }
    image(imz, bolax17, bolay17)
    if (frameCount - screen_frameCount >= 425) {
      bolax17 = bolax17 + random(-1, 1);
      bolay17 = bolay17 + 3;
    }
    image(imz, bolax18, bolay18)
    if (frameCount - screen_frameCount >= 150) {
      bolax18 = bolax18 + random(-1, 1);
      bolay18 = bolay18 + 3;
    }
    image(imz, bolax19, bolay19)
    if (frameCount - screen_frameCount >= 340) {
      bolax19 = bolax19 + random(-1, 1);
      bolay19 = bolay19 + 3;
    }
    image(imz, bolax20, bolay20)
    if (frameCount - screen_frameCount >= 370) {
      bolax20 = bolax20 + random(-1, 1);
      bolay20 = bolay20 + 3;
    }
    image(imz, bolax21, bolay21)
    if (frameCount - screen_frameCount >= 410) {
      bolax21 = bolax21 + random(-1, 1);
      bolay21 = bolay21 + 3;
    }
    image(imz, bolax22, bolay22)
    if (frameCount - screen_frameCount >= 402) {
      bolax22 = bolax22 + random(-1, 1);
      bolay22 = bolay22 + 3;
    }
    image(imz, bolax23, bolay23)
    if (frameCount - screen_frameCount >= 330) {
      bolax23 = bolax23 + random(-1, 1);
      bolay23 = bolay23 + 3;
    }
    image(imz, bolax24, bolay24)
    if (frameCount - screen_frameCount >= 300) {
      bolax24 = bolax24 + random(-1, 1);
      bolay24 = bolay24 + 3;
    }
    image(imz, bolax25, bolay25)
    if (frameCount - screen_frameCount >= 300) {
      bolax25 = bolax25 + random(-1, 1);
      bolay25 = bolay25 + 3;
    }
    image(imz, bolax26, bolay26)
    if (frameCount - screen_frameCount >= 190) {
      bolax26 = bolax26 + random(-1, 1);
      bolay26 = bolay26 + 3;
    }
    image(imz, bolax27, bolay27)
    if (frameCount - screen_frameCount >= 200) {
      bolax27 = bolax27 + random(-1, 1);
      bolay27 = bolay17 + 3;
    }
    image(imz, bolax28, bolay28)
    if (frameCount - screen_frameCount >= 310) {
      bolax28 = bolax28 + random(-1, 1);
      bolay28 = bolay28 + 3;
    }
    image(imz, bolax29, bolay29)
    if (frameCount - screen_frameCount >= 320) {
      bolax29 = bolax29 + random(-1, 1);
      bolay29 = bolay29 + 3;
    }
    image(imz, bolax30, bolay30)
    if (frameCount - screen_frameCount >= 350) {
      bolax30 = bolax30 + random(-1, 1);
      bolay30 = bolay30 + 3;
    }
    image(imz, bolax31, bolay31)
    if (frameCount - screen_frameCount >= 210) {
      bolax31 = bolax31 + random(-1, 1);
      bolay31 = bolay31 + 3;
    }
    image(imz, bolax32, bolay32)
    if (frameCount - screen_frameCount >= 270) {
      bolax32 = bolax32 + random(-1, 1);
      bolay32 = bolay32 + 3;
    }
    image(imz, bolax33, bolay33)
    if (frameCount - screen_frameCount >= 230) {
      bolax33 = bolax33 + random(-1, 1);
      bolay33 = bolay33 + 1;
    }
    image(imz, bolax34, bolay34)
    if (frameCount - screen_frameCount >= 270) {
      bolax34 = bolax34 + random(-1, 1);
      bolay34 = bolay34 + 1;
    }
    image(imz, bolax35, bolay35)
    if (frameCount - screen_frameCount >= 190) {
      bolax35 = bolax35 + random(-1, 1);
      bolay53 = bolay35 + 3;
    }
    image(imz, bolax36, bolay36)
    if (frameCount - screen_frameCount >= 430) {
      bolax36 = bolax36 + random(-1, 1);
      bolay36 = bolay36 + 3;
    }
    image(imz, bolax37, bolay37)
    if (frameCount - screen_frameCount >= 330) {
      bolax37 = bolax37 + random(-1, 1);
      bolay37 = bolay37 + 3;
    }
    image(imz, bolax38, bolay38)
    if (frameCount - screen_frameCount >= 210) {
      bolax38 = bolax38 + random(-1, 1);
      bolay38 = bolay38 + 3;
    }
    image(imz, bolax39, bolay39)
    if (frameCount - screen_frameCount >= 240) {
      bolax39 = bolax39 + random(-1, 1);
      bolay39 = bolay39 + 3;
    }
    image(imz, bolax40, bolay40)
    if (frameCount - screen_frameCount >= 200) {
      bolax40 = bolax40 + random(-1, 1);
      bolay40 = bolay40 + 3;
    }

    if (dist(bolax1, bolay1, x, y) < 50) {
      Cont++
      bolax1 = 600
      bolay1 = 1000
    }
    if (dist(bolax2, bolay2, x, y) < 50) {
      Cont++
      bolax2 = 600
      bolay2 = 1000
    }
    if (dist(bolax3, bolay3, x, y) < 50) {
      Cont++
      bolax3 = 600
      bolay3 = 1000
    }
    if (dist(bolax4, bolay4, x, y) < 50) {
      bolax4 = 600
      bolay4 = 1000
      Cont++
    }
    if (dist(bolax5, bolay5, x, y) < 50) {
      bolax5 = 600
      bolay5 = 1000
      Cont++
    }
    if (dist(bolax6, bolay6, x, y) < 50) {
      bolax6 = 600
      bolay6 = 1000
      Cont++
    }
    if (dist(bolax7, bolay7, x, y) < 50) {
      bolax7 = 600
      bolay7 = 1000
      Cont++
    }
    if (dist(bolax8, bolay8, x, y) < 50) {
      bolax8 = 600
      bolay8 = 1000
      Cont++
    }
    if (dist(bolax9, bolay9, x, y) < 50) {
      bolax9 = 600
      bolay9 = 1000
      Cont++
    }
    if (dist(bolax10, bolay10, x, y) < 50) {
      bolax10 = 600
      bolay10 = 1000
      Cont++
    }
    if (dist(bolax11, bolay11, x, y) < 50) {
      bolax11 = 600
      bolay11 = 1000
      Cont++
    }
    if (dist(bolax12, bolay12, x, y) < 50) {
      bolax12 = 600
      bolay12 = 1000
      Cont++
    }
    if (dist(bolax13, bolay13, x, y) < 50) {
      bolax13 = 600
      bolay13 = 1000
      Cont++
    }
    if (dist(bolax14, bolay14, x, y) < 50) {
      bolax14 = 600
      bolay14 = 1000
      Cont++
    }
    if (dist(bolax15, bolay15, x, y) < 50) {
      bolax15 = 600
      bolay15 = 1000
      Cont++
    }
    if (dist(bolax16, bolay16, x, y) < 50) {
      bolax16 = 600
      bolay16 = 1000
      Cont++
    }
    if (dist(bolax16, bolay16, x, y) < 50) {
      bolax16 = 600
      bolay16 = 1000
      Cont++
    }
    if (dist(bolax17, bolay17, x, y) < 50) {
      bolax17 = 600
      bolay17 = 1000
      Cont++
    }
    if (dist(bolax18, bolay18, x, y) < 50) {
      bolax18 = 600
      bolay18 = 1000
      Cont++
    }
    if (dist(bolax19, bolay19, x, y) < 50) {
      bolax19 = 600
      bolay19 = 1000
      Cont++
    }
    if (dist(bolax20, bolay20, x, y) < 50) {
      bolax20 = 600
      bolay20 = 1000
      Cont++
    }
    if (dist(bolax21, bolay21, x, y) < 50) {
      bolax21 = 600
      bolay21 = 1000
      Cont++
    }
    if (dist(bolax22, bolay22, x, y) < 50) {
      bolax22 = 600
      bolay22 = 1000
      Cont++
    }
    if (dist(bolax23, bolay23, x, y) < 50) {
      bolax23 = 600
      bolay23 = 1000
      Cont++
    }
    if (dist(bolax24, bolay24, x, y) < 50) {
      bolax24 = 600
      bolay24 = 1000
      Cont++
    }
    if (dist(bolax25, bolay25, x, y) < 50) {
      bolax25 = 600
      bolay25 = 1000
      Cont++
    }
    if (dist(bolax26, bolay26, x, y) < 50) {
      bolax26 = 600
      bolay26 = 1000
      Cont++
    }
    if (dist(bolax27, bolay27, x, y) < 50) {
      bolax27 = 600
      bolay27 = 1000
      Cont++
    }
    if (dist(bolax28, bolay28, x, y) < 50) {
      bolax28 = 600
      bolay28 = 1000
      Cont++
    }
    if (dist(bolax29, bolay29, x, y) < 50) {
      bolax29 = 600
      bolay29 = 1000
      Cont++
    }
    if (dist(bolax30, bolay30, x, y) < 50) {
      bolax30 = 600
      bolay30 = 1000
      Cont++
    }
    if (dist(bolax31, bolay31, x, y) < 50) {
      bolax31 = 600
      bolay31 = 1000
      Cont++
    }
    if (dist(bolax32, bolay32, x, y) < 50) {
      bolax32 = 600
      bolay32 = 1000
      Cont++
    }
    if (dist(bolax33, bolay33, x, y) < 50) {
      bolax33 = 600
      bolay33 = 1000
      Cont++
    }
    if (dist(bolax34, bolay34, x, y) < 50) {
      bolax34 = 600
      bolay34 = 1000
      Cont++
    }
    if (dist(bolax35, bolay35, x, y) < 50) {
      bolax35 = 600
      bolay35 = 1000
      Cont++
    }
    if (dist(bolax36, bolay36, x, y) < 50) {
      bolax36 = 600
      bolay36 = 1000
      Cont++
    }
    if (dist(bolax37, bolay37, x, y) < 50) {
      bolax37 = 600
      bolay37 = 1000
      Cont++
    }
    if (dist(bolax38, bolay38, x, y) < 50) {
      bolax38 = 600
      bolay38 = 1000
      Cont++
    }
    if (dist(bolax39, bolay39, x, y) < 50) {
      bolax39 = 600
      bolay39 = 1000
      Cont++
    }
    if (dist(bolax40, bolay40, x, y) < 50) {
      bolax40 = 600
      bolay40 = 1000
      Cont++
    }
    text(numerox + "+" + numeroy, 330, 350)
  }
  if (x > 500 && tela == 1) {
    if (numerox + numeroy == Cont) {
      screen_frameCount = frameCount
      tela = 4
    }
    if (numerox + numeroy != Cont) {
      tela = 5
    }
  }
  if (tela == 2) {
    background(1)
    text("Neste jogo o usuário deve pegar uma fruta determinada junto\n com a operação matemática envolvida e entregar na lojinha\n a quantidade certa de frutas,foi desenvolvido para alunos do\n 1º ano do ensino fundamental utilizando matemática como\n forma de educação.Caso você tenha pegado mais frutas\n do que o necessário.Aperte SHIFT para excluir  uma fruta\npor vez,para jogar se utiliza das setas do teclado ESQUERDA\n E DIREITA ", 0, 50)
  }
  if (tela == 3) {
    background(1)
    image(imp, 0, 0)
    text("Pedro Gabriel de Araújo", 0, 270)
  }
  if (tela == 4) {
    background(ima)
    image(img, x, y)
    wait+=1
    if (keyIsDown(16) && wait>30) {
      cont = cont - 1
      wait=0
    }
    if (keyIsDown(RIGHT_ARROW)) {
      if (x > 660)
        x = 660
      x = x + 8
    }
    if (keyIsDown(LEFT_ARROW)) {
      if (x < 5)
        x = 5
      x = x - 8
    }
    if (keyIsDown(UP_ARROW)) {
      if (y < 453)
        y = 453
      y = y - 3
    }
    if (keyIsDown(DOWN_ARROW)) {
      if (y > 450)
        y = 450
      y = y + 3
    }
    image(imb, volax1, volay1)
    if (frameCount- screen_frameCount >= 200) {
      volax1 = volax1 + random(-1, 1);
      volay1 = volay1 + 3;
    }
    image(imb, volax2, volay2)
    if (frameCount- screen_frameCount >= 400) {
      volax2 = volax2 + random(-1, 1);
      volay2 = volay2 + 2;
    }
    image(imb, volax3, volay3)
    if (frameCount- screen_frameCount >= 500) {
      volax3 = volax3 + random(-1, 1);
      volay3 = volay3 + 4;
    }
    image(imb, volax4, volay4)
    if (frameCount- screen_frameCount >= 600) {
      volax4 = volax4 + random(-1, 1);
      volay4 = volay4 + 2;
    }
    image(imb, volax5, volay5)
    if (frameCount- screen_frameCount >= 320) {
      volax5 = volax5 + random(-1, 1);
      volay5 = volay5 + 3;
    }
    image(imb, volax6, volay6)
    if (frameCount- screen_frameCount >= 340) {
      volax6 = volax6 + random(-1, 1);
      volay6 = volay6 + 3;
    }
    image(imb, volax7, volay7)
    if (frameCount- screen_frameCount >= 380) {
      volax7 = volax7 + random(-1, 1);
      volay7 = volay7 + 3;
    }
    image(imb, volax8, volay8)
    if (frameCount- screen_frameCount >= 460) {
      volax8 = volax8 + random(-1, 1);
      volay8 = volay8 + 3;
    }
    image(imb, volax9, volay9)
    if (frameCount- screen_frameCount >= 435) {
      volax9 = volax9 + random(-1, 1);
      volay9 = volay9 + 3;
    }
    image(imb, volax10, volay10)
    if (frameCount- screen_frameCount >= 515) {
      volax10 = volax10 + random(-1, 1);
      volay10 = volay10 + 3;
    }
    image(imb, volax11, volay11)
    if (frameCount- screen_frameCount >= 500) {
      volax11 = volax11 + random(-1, 1);
      volay11 = volay11 + 3;
    }
    image(imb, volax12, volay12)
    if (frameCount- screen_frameCount >= 330) {
      volax12 = volax12 + random(-1, 1);
      volay12 = volay12 + 3;
    }
    image(imb, volax13, volay13)
    if (frameCount- screen_frameCount >= 410) {
      volax13 = volax13 + random(-1, 1);
      volay13 = volay13 + 3;
    }
    image(imb, volax14, volay14)
    if (frameCount- screen_frameCount >= 630) {
      volax14 = volax14 + random(-1, 1);
      volay14 = volay14 + 3;
    }
    image(imb, volax14, volay14)
    if (frameCount- screen_frameCount >= 550) {
      volax14 = volax14 + random(-1, 1);
      volay14 = volay14 + 3;
    }
    image(imb, volax15, volay15)
    if (frameCount- screen_frameCount >= 570) {
      volax15 = volax15 + random(-1, 1);
      volay15 = volay15 + 3;
    }
    image(imb, volax16, volay16)
    if (frameCount- screen_frameCount >= 250) {
      volax16 = volax16 + random(-1, 1);
      volay16 = volay16 + 3;
    }
    image(imb, volax17, volay17)
    if (frameCount- screen_frameCount >= 225) {
      volax17 = volax17 + random(-1, 1);
      volay17 = volay17 + 3;
    }
    image(imb, volax18, volay18)
    if (frameCount- screen_frameCount >= 300) {
      volax18 = volax18 + random(-1, 1);
      volay18 = volay18 + 3;
    }

    if (dist(volax1, volay1, x, y) < 50) {
      cont++
      volax1 = 600
      volay1 = 1000
    }
    if (dist(volax2, volay2, x, y) < 50) {
      cont++
      volax2 = 600
      volay2 = 1000
    }
    if (dist(volax3, volay3, x, y) < 50) {
      cont++
      volax3 = 600
      volay3 = 1000
    }
    if (dist(volax4, volay4, x, y) < 50) {
      volax4 = 600
      volay4 = 1000
      cont++
    }
    if (dist(volax5, volay5, x, y) < 50) {
      volax5 = 600
      volay5 = 1000
      cont++
    }
    if (dist(volax6, volay6, x, y) < 50) {
      volax6 = 600
      volay6 = 1000
      cont++
    }
    if (dist(volax7, volay7, x, y) < 50) {
      volax7 = 600
      volay7 = 1000
      cont++
    }
    if (dist(volax8, volay8, x, y) < 50) {
      volax8 = 600
      volay8 = 1000
      cont++
    }
    if (dist(volax9, volay9, x, y) < 50) {
      volax9 = 600
      volay9 = 1000
      cont++
    }
    if (dist(volax10, volay10, x, y) < 50) {
      volax10 = 600
      volay10 = 1000
      cont++
    }
    if (dist(volax11, volay11, x, y) < 50) {
      volax11 = 600
      volay11 = 1000
      cont++
    }
    if (dist(volax12, volay12, x, y) < 50) {
      volax12 = 600
      volay12 = 1000
      cont++
    }
    if (dist(volax13, volay13, x, y) < 50) {
      volax13 = 600
      volay13 = 1000
      cont++
    }
    if (dist(volax14, volay14, x, y) < 50) {
      volax14 = 600
      volay14 = 1000
      cont++
    }
    if (dist(volax15, volay15, x, y) < 50) {
      volax15 = 600
      volay15 = 1000
      cont++
    }
    if (dist(volax16, volay16, x, y) < 50) {
      volax16 = 600
      volay16 = 1000
      cont++
    }
    if (dist(volax16, volay16, x, y) < 50) {
      volax16 = 600
      volay16 = 1000
      cont++
    }
    if (dist(volax17, volay17, x, y) < 50) {
      volax17 = 600
      volay17 = 1000
      cont++
    }
    if (dist(volax18, volay18, x, y) < 50) {
      volax18 = 600
      volay18 = 1000
      cont++
    }
    text("Frutas: " + cont, 300, 300)
    text(xnumero + "+" + ynumero, 330, 350)
  if (x > 600 && tela == 4) {
    if (xnumero + ynumero == cont) {
      tela = 9
    }
    if (xnumero + ynumero != cont) {
      tela = 5
    }
  }
  }
  if (tela == 9) {
    background(imr)
  }
  if (tela == 5) {
    background(imy)
  }
}