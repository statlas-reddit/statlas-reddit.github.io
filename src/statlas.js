var statlasState = {
    init: function(data) {
        this.data = data;
    },

	create: function() {
        // fps, remove
        game.time.advancedTiming = true;

//-------------------------------- MENU TEST ZONE ------------------------------
        // MENU BRIDGE, cant tint group so this is it
        // dont use:
        //this.menu_bridge = game.add.sprite(RES_X - 49, 50, 'menu_bridge'); // REMOVE PNG ALSO, AND PRELOADER. TO groups?
        let bridge_y = 70 // change to automatic for each button
        this.menu_bridge0 = game.add.sprite(RES_X - 49, bridge_y, 'menu_bridge1');
        this.menu_bridge0.anchor.y = 0.5
        this.menu_bridge1 = game.add.sprite(RES_X - 49+1, bridge_y, 'menu_bridge2');
        this.menu_bridge1.anchor.y = 0.5
        this.menu_bridge2 = game.add.sprite(RES_X - 49+2, bridge_y, 'menu_bridge3');
        this.menu_bridge2.anchor.y = 0.5
        this.bridge(COLOR['MENU_NONACTIVE_BG'], COLOR['MENU_ACTIVE'])

        // MENU BACKGROUND
        this.menu_bg = game.add.sprite(RES_X, 0, 'menu_bg');
        this.menu_bg.tint = convertColor(COLOR['MENU_NONACTIVE_BG'])
        //this.menu_bg.anchor.x = 1.0

        // MENU OUTER BG
        this.menu_outer_bg = game.add.sprite(RES_X + 159, 0, 'menu_outer_bg');
        this.menu_outer_bg.anchor.x = 1.0
        this.menu_outer_bg.tint = convertColor(COLOR['MENU_ACTIVE'])
        game.add.tween(this.menu_outer_bg).to({x: RES_X}, 500, Phaser.Easing.Quintic.Out, true);

        // MENU CONSTANT RIGHT
        this.menu_constant = game.add.sprite(RES_X, 0, 'menu_constant');
        //this.menu_constant.alpha = 0.5
        this.addRightMenu(this.menu_constant);
        this.menu_constant.tint = convertColor(COLOR['MENU_ACTIVE'])
        game.add.tween(this.menu_constant).to({x: RES_X - 54}, 1, Phaser.Easing.Quintic.Out, true); // ??? 1

        // BUTTONS ENERGY
        this.btn_energy_electricityproduction = this.createMenuButton('btn_energy_electricityproduction', BTN_MENU_ENERGY_X+200, BTN_MENU_ENERGY_Y['ELECTRICITYPRODUCTION'])
        this.btn_energy_accesstoelectricity = this.createMenuButton('btn_energy_accesstoelectricity', BTN_MENU_ENERGY_X, BTN_MENU_ENERGY_Y['ACCESSTOELECTRICITY'])
        this.btn_energy_oil = this.createMenuButton('btn_energy_oil', BTN_MENU_ENERGY_X, BTN_MENU_ENERGY_Y['OIL'])
        this.btn_energy_coal = this.createMenuButton('btn_energy_coal', BTN_MENU_ENERGY_X, BTN_MENU_ENERGY_Y['COAL'])
        this.btn_energy_naturalgas = this.createMenuButton('btn_energy_naturalgas', BTN_MENU_ENERGY_X, BTN_MENU_ENERGY_Y['NATURALGAS'])
        this.btn_energy_renewablesources = this.createMenuButton('btn_energy_renewablesources', BTN_MENU_ENERGY_X, BTN_MENU_ENERGY_Y['RENEWABLESOURCES'])
        this.btn_energy_hydropower = this.createMenuButton('btn_energy_hydropower', BTN_MENU_ENERGY_X, BTN_MENU_ENERGY_Y['HYDROPOWER'])
        this.btn_energy_nuclearpower = this.createMenuButton('btn_energy_nuclearpower', BTN_MENU_ENERGY_X, BTN_MENU_ENERGY_Y['NUCLEARPOWER'])



        // MENU FAKER
        this.menu_faker = game.add.sprite(RES_X, 0, 'menu_faker');
        game.add.tween(this.menu_faker).to({x: RES_X - 16}, 500, Phaser.Easing.Quintic.Out, true); // ??? 1

        // BUTTONS
        //let btn_demographics = game.add.sprite(RES_X - 98, 5, 'btn_demographics');
        //this.addButton(btn_demographics)
        // turst(?!) button remove
        /*
        this.btn_demographics = game.add.sprite(1839, BTN_DEMOGRAPHICS_Y, 'btn_demographics');
        this.btn_demographics.tint = convertColor(COLOR['MENU_ACTIVE'])
        this.btn_demographics.anchor.y = 0.5
        this.btn_demographics.anchor.x = 0.5
        this.addButton(this.btn_demographics)
        */
        //console.log(this.menu_outer_bg.height)
        //console.log(BTN_MENU_Y)
        //this.btn_demographics_text = this.createMenuButtonText('btn_demographics_text', BTN_MENU_X, BTN_MENU_Y['DEMOGRAPHICS'])
        this.btn_demographics = this.createMenuButton('btn_demographics', BTN_MENU_X, BTN_MENU_Y['DEMOGRAPHICS'])
        //this.btn_demographics_text = game.add.sprite(BTN_MENU_X, BTN_MENU_Y['DEMOGRAPHICS'], 'btn_demographics_text')
        this.btn_economics = this.createMenuButton('btn_economics', BTN_MENU_X, BTN_MENU_Y['ECONOMICS']);
        this.btn_education = this.createMenuButton('btn_education', BTN_MENU_X, BTN_MENU_Y['EDUCATION'])
        this.btn_health = this.createMenuButton('btn_health', BTN_MENU_X, BTN_MENU_Y['HEALTH'])
        this.btn_environment = this.createMenuButton('btn_environment', BTN_MENU_X, BTN_MENU_Y['ENVIRONMENT'])
        this.btn_energy = this.createMenuButton('btn_energy', BTN_MENU_X, BTN_MENU_Y['ENERGY'])
        this.btn_military = this.createMenuButton('btn_military', BTN_MENU_X, BTN_MENU_Y['MILITARY'])


//-------------------------------- /MENU TEST ZONE -----------------------------

        // card
        this.card = game.add.sprite(4, RES_Y, 'card');
        game.add.tween(this.card).to({y: RES_Y - 485 - 1}, 500, Phaser.Easing.Exponential.Out, true);
        this.card_horz = game.add.sprite(19, RES_Y, 'card_horz');
        game.add.tween(this.card_horz).to({y: RES_Y-485+2+9}, 500, Phaser.Easing.Exponential.Out, true);
        // ---
        this.card_population_ring = game.add.sprite(CARD_COL1_X, CARD_ROW1_Y, 'card_ring');
        this.card_population_ring.anchor.x = 0.5
        this.card_population_ring.anchor.y = 0.5
        this.card_population_ring.alpha = 0.0
        //this.card_population_ring.tint = '0x22a2a2'
        this.card_population = game.add.sprite(CARD_COL1_X, CARD_ROW1_Y, 'card_population');
        this.card_population.anchor.x = 0.5
        this.card_population.anchor.y = 0.5
        this.card_population.alpha = 0.0
        //this.card_population.tint = '0xa8888a'

        this.card_language_ring = game.add.sprite(CARD_COL2_X, CARD_ROW1_Y, 'card_ring');
        this.card_language_ring.anchor.x = 0.5
        this.card_language_ring.anchor.y = 0.5
        this.card_language_ring.alpha = 0.0
        this.card_language = game.add.sprite(CARD_COL2_X, CARD_ROW1_Y, 'card_language');
        this.card_language.anchor.x = 0.5
        this.card_language.anchor.y = 0.5
        this.card_language.alpha = 0.0

        this.card_capital_ring = game.add.sprite(CARD_COL3_X, CARD_ROW1_Y, 'card_ring');
        this.card_capital_ring.anchor.x = 0.5
        this.card_capital_ring.anchor.y = 0.5
        this.card_capital_ring.alpha = 0.0
        this.card_capital = game.add.sprite(CARD_COL3_X, CARD_ROW1_Y, 'card_capital');
        this.card_capital.anchor.x = 0.5
        this.card_capital.anchor.y = 0.5
        this.card_capital.alpha = 0.0
        //---
        this.card_area_ring = game.add.sprite(CARD_COL1_X, CARD_ROW2_Y, 'card_ring');
        this.card_area_ring.anchor.x = 0.5
        this.card_area_ring.anchor.y = 0.5
        this.card_area_ring.alpha = 0.0
        this.card_area = game.add.sprite(CARD_COL1_X, CARD_ROW2_Y, 'card_area');
        this.card_area.anchor.x = 0.5
        this.card_area.anchor.y = 0.5
        this.card_area.alpha = 0.0

        this.card_government_ring = game.add.sprite(CARD_COL2_X, CARD_ROW2_Y, 'card_ring');
        this.card_government_ring.anchor.x = 0.5
        this.card_government_ring.anchor.y = 0.5
        this.card_government_ring.alpha = 0.0
        this.card_government = game.add.sprite(CARD_COL2_X, CARD_ROW2_Y, 'card_government');
        this.card_government.anchor.x = 0.5
        this.card_government.anchor.y = 0.5
        this.card_government.alpha = 0.0

        this.card_leader_ring = game.add.sprite(CARD_COL3_X, CARD_ROW2_Y, 'card_ring');
        this.card_leader_ring.anchor.x = 0.5
        this.card_leader_ring.anchor.y = 0.5
        this.card_leader_ring.alpha = 0.0
        this.card_leader = game.add.sprite(CARD_COL3_X, CARD_ROW2_Y, 'card_leader');
        this.card_leader.anchor.x = 0.5
        this.card_leader.anchor.y = 0.5
        this.card_leader.alpha = 0.0
        //---
        this.card_religion_ring = game.add.sprite(CARD_COL1_X, CARD_ROW3_Y, 'card_ring');
        this.card_religion_ring.anchor.x = 0.5
        this.card_religion_ring.anchor.y = 0.5
        this.card_religion_ring.alpha = 0.0
        this.card_religion = game.add.sprite(CARD_COL1_X, CARD_ROW3_Y, 'card_religion');
        this.card_religion.anchor.x = 0.5
        this.card_religion.anchor.y = 0.5
        this.card_religion.alpha = 0.0

        this.card_currency_ring = game.add.sprite(CARD_COL2_X, CARD_ROW3_Y, 'card_ring');
        this.card_currency_ring.anchor.x = 0.5
        this.card_currency_ring.anchor.y = 0.5
        this.card_currency_ring.alpha = 0.0
        this.card_currency = game.add.sprite(CARD_COL2_X, CARD_ROW3_Y, 'card_currency');
        this.card_currency.anchor.x = 0.5
        this.card_currency.anchor.y = 0.5
        this.card_currency.alpha = 0.0

        this.card_www_ring = game.add.sprite(CARD_COL3_X, CARD_ROW3_Y, 'card_ring');
        this.card_www_ring.anchor.x = 0.5
        this.card_www_ring.anchor.y = 0.5
        this.card_www_ring.alpha = 0.0
        this.card_www = game.add.sprite(CARD_COL3_X, CARD_ROW3_Y, 'card_www');
        this.card_www.anchor.x = 0.5
        this.card_www.anchor.y = 0.5
        this.card_www.alpha = 0.0

        //this.load.image('card_area', 'assets/gui/backgrounds/card_icons/card_area.png');
        //this.load.image('card_capital', 'assets/gui/backgrounds/card_icons/card_capital.png');
        //this.load.image('card_currency', 'assets/gui/backgrounds/card_icons/card_currency.png');
        //this.load.image('card_gdp', 'assets/gui/backgrounds/card_icons/card_gdp.png');
        //this.load.image('card_leader', 'assets/gui/backgrounds/card_icons/card_leader.png');
        //this.load.image('card_language', 'assets/gui/backgrounds/card_icons/card_language.png');
        //this.load.image('card_area', 'assets/gui/backgrounds/card_icons/card_area.png');
        //this.load.image('card_religion', 'assets/gui/backgrounds/card_icons/card_religion.png');
        //this.load.image('card_www', 'assets/gui/backgrounds/card_icons/card_www.png');


        // ----------------------------------
        // ADD ALL COUNTRIES_fill
		this.world = [];
        this.world_stroke = [];
        //var country_img;
        //console.log(this.data.length-1)
        for (let country in this.data) {
            //console.log(this.data[country])
            this.world[country] = game.add.sprite(this.data[country]['pos_x'], this.data[country]['pos_y'], country + '_fill');
            this.world_stroke[country] = game.add.sprite(this.data[country]['pos_x'], this.data[country]['pos_y'], country + '_stroke');

            //this.africa[i].alpha=0.5
            //this.country_img = this.addObject(this.world[i], getRandomColor());
            this.addObject(this.world[country], this.world_stroke[country], COLOR['WHITE'], COLOR['WHITE']);
            ///this.world_stroke[i].alpha = 0.0
            //this.country_img.alpha = 0.0

        }
        //console.log(this.world.length)
        this.world_shadow = game.add.sprite(0, 0, 'world_shadow');


        // gradient + gradient color per step
        //this.current_gradient = createGradient('#ffffff', '#000000');
        this.current_gradient = createGradient('#ffd3d3', '#6b0000');

        // gradient shadow
        //this.gradient_shadow = game.add.sprite(GRAD_XPOS - 8 - 2 + 2, RES_Y - GRAD_YPAD - 1, 'gradient_shadow');
        //this.gradient_shadow.alpha = 0.0

        // gradient divider
        this.gradient_divider = game.add.sprite(GRAD_XPOS + 50, RES_Y - GRAD_YPAD - 1 + 8, 'gradient_divider'); // add destroy for boot
        this.gradient_divider.alpha = 0

        // TEXT
        //this.printGradientValues('PWh/p', '8.8PWh/p')
        //this.printGradientValues('0', '8.8')
        this.printGradientValues(0, 8.8, 'PWh/p') // remove so that left value etc are spawned from boot

        // FLAG
        this.flag_corner1 = game.add.sprite(-50, -50, 'flag_corner1') // bird shit
        this.flag_corner2 = game.add.sprite(-50, -50, 'flag_corner2')
        this.flag_corner3 = game.add.sprite(-50, -50, 'flag_corner3')
        this.flag_corner4 = game.add.sprite(-50, -50, 'flag_corner4')

        // TEST. REMOVE
        //this.current_flag = game.add.sprite(19, 606, 'flag_se');

        // DESTROY ON BOOT
        ///this.unit_l.alpha = 0.0
        ///this.unit_r.alpha = 0.0
        ///this.value_min.alpha = 0.0
        ///this.value_max.alpha = 0.0
        ///this.current_gradient.alpha = 0.0
        ///this.gradient_shadow.alpha = 0.0
        //this.gradient_steps[3].alpha = 0.0

        //console.log(this.formatNumber(9503010011, 1, 'scientific'))
        //console.log(this.formatNumber(9503010011, 1, 'simple'))


        //console.log(this.hexToRGB(COLOR['WHITE'])) // works

        // WORKS
        //console.log(this.interpolateGradient(this.hexToRGB(COLOR['MENU_ACTIVE']), this.hexToRGB(COLOR['MENU_NONACTIVE']), 3))
        //let lol = this.interpolateGradient(this.hexToRGB(COLOR['MENU_ACTIVE']), this.hexToRGB(COLOR['MENU_NONACTIVE']), 3)
        //console.log(lol[1])

        // TEST AREA, remove
        //let style42 = {font: '32px Roboto Regular', fill: COLOR['BLACK'], align: 'center', boundsAlignH: 'center', boundsAlignV: 'middle', wordWrap: true, wordWrapWidth: 104};
        //this.current_country_text42 = game.add.text(19, 606, 'Ho Chi Minh City', style42); // 704
        //this.current_country_text42.setTextBounds(0, 0, 104, 0)
        //this.current_country_text42.lineSpacing = -15 // 15

    },

    // remove
    render: function() {
        //this.time.advancedTiming = true;
        game.debug.text(game.time.fps, 2, 14, '#ff0000');
    },

	fadePictureOut: function(picture, duration, opacity) {
			picture.alpha = 1;
			game.add.tween(picture).to({alpha: opacity}, duration, Phaser.Easing.Linear.None, true);
	},

	addObject: function(obj_fill, obj_stroke, colour_fill, colour_stroke) {
        obj_fill.tint = convertColor(colour_fill);
        //obj_fill.tint = '0x555555'
		obj_fill.alpha = 0.5; // 0.5!
        obj_stroke.tint = convertColor(colour_stroke)
        obj_stroke.alpha = 0.0;
		obj_fill.inputEnabled = true;
		//obj_fill.input.pixelPerfectClick = true;
		obj_fill.input.pixelPerfectOver = true;

        obj_fill.events.onInputOver.add(function(){this.cardShowOver(obj_fill, obj_stroke)}, this);
		obj_fill.events.onInputOut.add(function(){this.cardShowOut(obj_fill, obj_stroke)}, this);
		//obj.events.onInputUp.add(this.getObject, this)
        //return obj_fill

        //--------------------

        ///obj_stroke.tint = convertColor(colour_stroke);
        //obj_fill.tint = '0x555555'
		///obj_stroke.alpha = 0.0; // 0.5!
		///obj_stroke.inputEnabled = true;
		//obj_stroke.input.pixelPerfectClick = true;
		///obj_stroke.input.pixelPerfectOver = true;

        //obj_stroke.events.onInputOver.add(function(){this.cardShowOver(obj_fill, '#ffffff')}, this);
		//obj_stroke.events.onInputOut.add(function(){this.cardShowOut(obj_fill, '#000000')}, this);
		//obj.events.onInputUp.add(this.getObject, this)
        //return obj_fill
	},


    addButton: function(obj) {
        //obj.anchor.x = 0.5
        //obj.tint = '0xFFFFFF'

        obj.inputEnabled = true
        //console.log("HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJ")

        obj.input.pixelPerfectClick = true;
		obj.input.pixelPerfectOver = true;

        obj.events.onInputOver.add(function() {this.buttonOver(obj)}, this);
		obj.events.onInputOut.add(function() {this.buttonOut(obj)}, this);
        obj.events.onInputUp.add(function() {this.buttonUp(obj)}, this);
        //return obj
    },

    buttonOver: function(obj) {
        //obj.tint = '0xffffff'
        tweenTint(obj, obj.tint, convertColor(COLOR['WHITE']), 150)
        //console.log(obj['key'] + '_text');
        //console.log("hej")
        //tweenAlpha(this.btn_demographics_text, 1.0);
        //tweenAlpha(eval('this.' + obj['key'] + '_text'), 1.0);
        //tweenTint(obj, , convertColor(COLOR['WHITE']), 150)
        //this.bridge(COLOR['WHITE'], COLOR['WHITE']) // add later, last

    },

    buttonOut: function(obj) {
        tweenTint(obj, obj.tint, convertColor(COLOR['MENU_NONACTIVE']), 150);
        //this.bridge(COLOR['WHITE'], COLOR['MENU_NONACTIVE']) // add later, last
    },

    // gradient and country color change
    buttonUp: function(obj) {
        //this.getObject(obj.key)

        //LOLLER
        for (let country in this.data) {
            this.world[country].alpha = 1.0
            tweenTint(this.world[country], this.world[country].tint, getRandomColor(), 150)

            //this.world[i].alpha = 1.0; // if firstclick or something? /////// NOT NEEDED RIGHT?
            //tweenAlpha(this.world[country], 1.0)
        }

        console.log(obj['key'])

        /*
        for (let i = 0; i < this.data.length; i++) {
            //this.world[i].tint = getRandomColor();
            tweenTint(this.world[i], this.world[i].tint, getRandomColor(), 150)

            //this.world[i].alpha = 1.0; // if firstclick or something?
            tweenAlpha(this.world[i], 1.0)
        }
        */

        // GRADIENT
        this.unit_l.destroy() // replace instead, rtfm
        this.unit_r.destroy()
        this.value_min.destroy()
        this.value_max.destroy()
        //tweenAlpha(this.current_gradient, 0.0) // NOT NEEDED RIGHT?
        this.current_gradient = createGradient(getRandomColor2(), getRandomColor2())
        //var current_gradient_rgb_50 = this.getRGBgradient(lol, GRAD_LEN, 0.5)
        //console.log(current_gradient_rgb_50[0]) // 0=r, 1=g, 2=b, from getRGBgradient
        // GRADIENT SHADOW
        //this.gradient_shadow.destroy() // WARNING. REMOVE. REPLACE
        this.gradient_shadow = game.add.sprite(GRAD_XPOS - 8 - 2 + 2, RES_Y - GRAD_YPAD - 1, 'gradient_shadow'); // WARNING. REMOVE. REPLACE
        //this.gradient_shadow.alpha = 0.0
        //tweenAlpha(this.gradient_shadow, 0.0)
        //tweenAlpha(this.gradient_shadow, 1.0)
        // GRADIENT TEXT
        this.printGradientValues(0, 3845489359395, 'Wh/p')


        // TESTING AREA, SCALING MENU, BUTTONS SCALING
        //game.add.tween(this.menu_outer_bg).to({x: RES_X}, 500, Phaser.Easing.Quintic.Out, true);
        // TWEEN X SCALE
        game.add.tween(this.menu_outer_bg.scale).to({ x: 0.0}, 400, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.btn_demographics).to({x: RES_X - 29, y: BTN_MENU_Y['DEMOGRAPHICS']}, 400, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.btn_demographics.scale).to({ x: 0.35, y: 0.35}, 400, Phaser.Easing.Quadratic.Out, true)
        game.add.tween(this.btn_economics).to({x: RES_X - 29, y: BTN_MENU_Y['ECONOMICS']}, 400, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.btn_economics.scale).to({ x: 0.35, y: 0.35}, 400, Phaser.Easing.Quadratic.Out, true)
        game.add.tween(this.btn_education).to({x: RES_X - 29, y: BTN_MENU_Y['EDUCATION']}, 400, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.btn_education.scale).to({ x: 0.35, y: 0.35}, 400, Phaser.Easing.Quadratic.Out, true)
        game.add.tween(this.btn_health).to({x: RES_X - 29, y: BTN_MENU_Y['HEALTH']}, 400, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.btn_health.scale).to({ x: 0.35, y: 0.35}, 400, Phaser.Easing.Quadratic.Out, true)
        game.add.tween(this.btn_environment).to({x: RES_X - 29, y: BTN_MENU_Y['ENVIRONMENT']}, 400, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.btn_environment.scale).to({ x: 0.35, y: 0.35}, 400, Phaser.Easing.Quadratic.Out, true)
        game.add.tween(this.btn_energy).to({x: RES_X - 29, y: BTN_MENU_Y['ENERGY']}, 400, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.btn_energy.scale).to({ x: 0.35, y: 0.35}, 400, Phaser.Easing.Quadratic.Out, true)
        game.add.tween(this.btn_military).to({x: RES_X - 29, y: BTN_MENU_Y['MILITARY']}, 400, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.btn_military.scale).to({ x: 0.35, y: 0.35}, 400, Phaser.Easing.Quadratic.Out, true)

        // SHIT123
        game.add.tween(this.btn_energy_electricityproduction).to({x: BTN_MENU_ENERGY_X, y: BTN_MENU_ENERGY_Y['ELECTRICITYPRODUCTION']}, 400, Phaser.Easing.Quadratic.Out, true);
        //game.add.tween(this.btn_energy_electricityproduction.scale).to({ x: 0.35, y: 0.35}, 400, Phaser.Easing.Quadratic.Out, true)

        //this.menu_bg
        game.add.tween(this.menu_bg).to({x: RES_X - 159}, 500, Phaser.Easing.Circular.In, true);

    },

    addRightMenu: function(obj, color) {
        //obj.anchor.x = 0.5
        //obj.tint = '0xFFFFFF'

        obj.inputEnabled = true

        obj.input.pixelPerfectClick = true;
		obj.input.pixelPerfectOver = true;

        obj.events.onInputOver.add(function() {this.rightMenuOver(obj)}, this);
		obj.events.onInputOut.add(function() {this.rightMenuOut(obj)}, this);
        obj.events.onInputUp.add(function() {this.rightMenuUp(obj)}, this);

        //return obj
    },
    rightMenuOver: function(obj) {
        // fixs

    },

    rightMenuOut: function(obj) {
        // fix
    },

    rightMenuUp: function(obj) {
        getObject(obj.key)

        // TESTING
        game.add.tween(this.menu_outer_bg.scale).to({ x: 1.0}, 400, Phaser.Easing.Quadratic.Out, true);

        game.add.tween(this.btn_demographics).to({x: RES_X - 81, y: BTN_MENU_Y['DEMOGRAPHICS']}, 400, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.btn_demographics.scale).to({ x: 1.0, y: 1.0}, 400, Phaser.Easing.Quadratic.Out, true)

        game.add.tween(this.btn_economics).to({x: RES_X - 81, y: BTN_MENU_Y['ECONOMICS']}, 400, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.btn_economics.scale).to({ x: 1.0, y: 1.0}, 400, Phaser.Easing.Quadratic.Out, true)

        game.add.tween(this.btn_education).to({x: RES_X - 81, y: BTN_MENU_Y['EDUCATION']}, 400, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.btn_education.scale).to({ x: 1.0, y: 1.0}, 400, Phaser.Easing.Quadratic.Out, true)

        game.add.tween(this.btn_health).to({x: RES_X - 81, y: BTN_MENU_Y['HEALTH']}, 400, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.btn_health.scale).to({ x: 1.0, y: 1.0}, 400, Phaser.Easing.Quadratic.Out, true)

        game.add.tween(this.btn_environment).to({x: RES_X - 81, y: BTN_MENU_Y['ENVIRONMENT']}, 400, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.btn_environment.scale).to({ x: 1.0, y: 1.0}, 400, Phaser.Easing.Quadratic.Out, true)

        game.add.tween(this.btn_energy).to({x: RES_X - 81, y: BTN_MENU_Y['ENERGY']}, 400, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.btn_energy.scale).to({ x: 1.0, y: 1.0}, 400, Phaser.Easing.Quadratic.Out, true)

        game.add.tween(this.btn_military).to({x: RES_X - 81, y: BTN_MENU_Y['MILITARY']}, 400, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.btn_military.scale).to({ x: 1.0, y: 1.0}, 400, Phaser.Easing.Quadratic.Out, true)

        //this.menu_bg
        game.add.tween(this.menu_bg).to({x: RES_X}, 500, Phaser.Easing.Circular.Out, true);
    },

    bridge: function(col1, col2) {
        let bridge_gradient = interpolateGradient(hexToRGB(col1), hexToRGB(col2), BRIDGE_STEP)

        //console.log(bridge_gradient)
        //console.log(col1)
        //console.log(this.RGBToHex(bridge_gradient[1]))
        this.menu_bridge0.tint = RGBToHex(bridge_gradient[1])
        this.menu_bridge1.tint = RGBToHex(bridge_gradient[2])
        this.menu_bridge2.tint = RGBToHex(bridge_gradient[3])

        //tweenTint(this.menu_bridge0, convertColor(col1), this.RGBToHex(bridge_gradient[1]), 150)
        //tweenTint(this.menu_bridge1, convertColor(col1), this.RGBToHex(bridge_gradient[2]), 150)
        //tweenTint(this.menu_bridge2, convertColor(col1), this.RGBToHex(bridge_gradient[3]), 150)

    },

	cardShowOver: function(obj_fill, obj_stroke) {
        // show flag
        //console.log(obj_fill)
        //this.current_flag.destroy();
        this.current_flag = game.add.sprite(19, 606, obj_fill['key'].slice(0, -5) + '_flag'); // WARNING 12345
        this.current_flag.alpha = 0.0
        tweenAlpha(this.current_flag, 1.0)

        // FLAGS
        //console.log(this.current_flag.height)
        this.flag_corner1.x = this.current_flag.position['x']
        this.flag_corner1.y = this.current_flag.position['y']
        this.flag_corner1.bringToTop()

        this.flag_corner2.x = this.current_flag.position['x'] + this.current_flag.width - 4
        this.flag_corner2.y = this.current_flag.position['y']
        this.flag_corner2.bringToTop()

        this.flag_corner3.x = this.current_flag.position['x']
        this.flag_corner3.y = this.current_flag.position['y'] + this.current_flag.height - 4
        this.flag_corner3.bringToTop()

        this.flag_corner4.x = this.current_flag.position['x'] + this.current_flag.width - 4
        this.flag_corner4.y = this.current_flag.position['y'] + this.current_flag.height - 4
        this.flag_corner4.bringToTop()

        //this.flag_stroke = game.add.sprite(10, 597, 'flag_stroke');

        // country name
        //var obj_name = this.getCountryName(obj);
		//console.log(obj_tmp)

        // fix tab bug?
        //this.current_country_text.destroy()
        //this.current_flag.destroy()


        let font_size = 46 // safe for longest name(?)/most words
        //let font_size_nonmatch = true
        //console.log(this.getCountryName(obj))
        while (true) {
            let style_country = {font: font_size + 'px Roboto Regular', fill: COLOR['WHITE'], align: 'center', boundsAlignH: 'center', boundsAlignV: 'middle', wordWrap: true, wordWrapWidth: this.current_flag.width};
            //this.current_country_text = game.add.text(25, 702, obj_name, style); // 704
            this.current_country_text = game.add.text(19, 606, getCountryName(obj_fill, this.data), style_country); // 704

            //this.current_country_text.setTextBounds(-8, 3, this.current_flag.width+5, 0+5) // cat shit wrapped in dog shit
            this.current_country_text.setTextBounds(0, 0, this.current_flag.width, this.current_flag.height)
            let bounds_current_country_text = this.current_country_text.getLocalBounds()
            //console.log(bounds_current_country_text['width'])
            //console.log(font_size)

            if (bounds_current_country_text['width'] < (this.current_flag.width - CARD_COUNTRY_PADDING) && bounds_current_country_text['height'] < (this.current_flag.height - CARD_COUNTRY_PADDING)) {
                this.current_country_text.destroy()
                // style.destroy() ??? even works?
                font_size += 1
            } else {
                this.current_country_text.alpha = 0.0
                //this.current_country_text.setTextBounds(-8, 3, this.current_flag.width+5, 0+5) // cat shit wrapped in dog shit
                this.current_country_text.stroke = COLOR['BLACK'];
                this.current_country_text.strokeThickness = font_size * 0.10; // make dynamic?
                this.current_country_text.lineSpacing = -15 // 15

                break;
            }
        }

        tweenAlpha(this.current_country_text, 1.0)

        tweenAlpha(this.card_horz, 0.0)

        //obj.tint = colour;
        //console.log(colour)
        //tweenTint(obj, '0xffffff', '0x000000', 150)
        //this.world_stroke.alpha = 1.0
        //obj_stroke.alpha = 1.0
        obj_stroke.bringToTop() // important
        tweenAlpha(obj_stroke, 1.0)

        // card icons
        tweenAlpha(this.card_population, 1.0)
        tweenAlpha(this.card_population_ring, 1.0)
        this.card_population_ring.tint = getRandomColor()
        this.card_population.tint = getRandomColor()

        tweenAlpha(this.card_language, 1.0)
        tweenAlpha(this.card_language_ring, 1.0)
        //tweenAlpha(this.card_language_ring, 1.0)
        this.card_language_ring.tint = getRandomColor()
        this.card_language.tint = getRandomColor()

        tweenAlpha(this.card_capital, 1.0)
        tweenAlpha(this.card_capital_ring, 1.0)
        //tweenAlpha(this.card_capital_ring, 1.0)
        this.card_capital_ring.tint = getRandomColor()
        this.card_capital.tint = getRandomColor()

        tweenAlpha(this.card_area, 1.0)
        tweenAlpha(this.card_area_ring, 1.0)
        //tweenAlpha(this.card_area_ring, 1.0)
        this.card_area_ring.tint = getRandomColor()
        this.card_area.tint = getRandomColor()

        tweenAlpha(this.card_government, 1.0)
        tweenAlpha(this.card_government_ring, 1.0)
        //tweenAlpha(this.card_gdp_ring, 1.0)
        this.card_government_ring.tint = getRandomColor()
        this.card_government.tint = getRandomColor()

        tweenAlpha(this.card_leader, 1.0)
        tweenAlpha(this.card_leader_ring, 1.0)
        //tweenAlpha(this.card_leader_ring, 1.0)
        this.card_leader_ring.tint = getRandomColor()
        this.card_leader.tint = getRandomColor()

        tweenAlpha(this.card_religion, 1.0)
        tweenAlpha(this.card_religion_ring, 1.0)
        //tweenAlpha(this.card_religion_ring, 1.0)
        this.card_religion_ring.tint = getRandomColor()
        this.card_religion.tint = getRandomColor()

        tweenAlpha(this.card_currency, 1.0)
        tweenAlpha(this.card_currency_ring, 1.0)
        //tweenAlpha(this.card_currency_ring, 1.0)
        this.card_currency_ring.tint = getRandomColor()
        this.card_currency.tint = getRandomColor()

        tweenAlpha(this.card_www, 1.0)
        tweenAlpha(this.card_www_ring, 1.0)
        //tweenAlpha(this.card_www_ring, 1.0)
        this.card_www_ring.tint = getRandomColor()
        this.card_www.tint = getRandomColor()

        // CARD DATA FROM RING POS
        let card_print_population = printCardData(this.card_population_ring, '4500000000', '', false)
        this.card_population_value = card_print_population['value']
        this.card_population_suffix = card_print_population['suffix']

        let card_print_language = printCardData(this.card_language_ring, 'Swedish', '', true)
        //this.printCardData(this.card_language, '450000', 'm²')
        this.card_language_value = card_print_language['value']
        //this.card_language_suffix = card_print_language['suffix']

        let card_print_capital = printCardData(this.card_capital_ring, 'Ho Chi Minh City', '', true)
        //let card_print_capital = this.printCardData(this.card_capital, 'X x X x X x X x X x X x X x X x X x X x X x X x X x X x X x X x X x X x X x X x X x X x ', '', true)
        //this.printCardData(this.card_capital, '450000', 'm²')
        this.card_capital_value = card_print_capital['value']
        //this.card_capital_suffix = card_print_capital['suffix'] // remove these for nontext
        //this.card_capital_value.setTextBounds(0, 0, 500, 0)
        //this.card_capital_value.useAdvancedWrap = true
        //this.card_capital_value.wordWrapWidth = 104
        //this.card_capital_value.lineSpacing = -12 // move?
        //console.log(obj_fill)
        //console.log(this.data)

        let card_print_area = printCardData(this.card_area_ring, '11000000', 'm²', false)
        //this.printCardData(this.card_area, '450000', 'm²')
        this.card_area_value = card_print_area['value']
        this.card_area_suffix = card_print_area['suffix']

        let card_print_government = printCardData(this.card_government_ring, 'Unitary parliamentary constitutional monarchy', '', true)
        //this.printCardData(this.card_gdp, '450000', 'm²')
        this.card_government_value = card_print_government['value']
        this.card_government_suffix = card_print_government['suffix']

        let card_print_leader = printCardData(this.card_leader_ring, 'Stefan Löfven', '', true)
        //this.printCardData(this.card_leader, '450000', 'm²')
        this.card_leader_value = card_print_leader['value']
        //this.card_leader_suffix = card_print_leader['suffix']

        let card_print_religion = printCardData(this.card_religion_ring, 'Christianity', '', true)
        //this.printCardData(this.card_religion, '450000', 'm²')
        this.card_religion_value = card_print_religion['value']
        //this.card_religion_suffix = card_print_religion['suffix']

        let card_print_currency = printCardData(this.card_currency_ring, 'United States dollar ($)', '', true)
        //this.printCardData(this.card_currency, '450000', 'm²')
        this.card_currency_value = card_print_currency['value']
        //this.card_currency_suffix = card_print_currency['suffix']
        //this.card_currency_value.lineSpacing = -12 // move?

        let card_print_www = printCardData(this.card_www_ring, '.se', '', true)
        //this.printCardData(this.card_www, '450000', 'm²')
        this.card_www_value = card_print_www['value']
        //this.card_www_suffix = card_print_www['suffix']
	},

    cardShowOut: function(obj_fill, obj_stroke) {
        tweenAlpha(this.current_country_text, 0.0)

        tweenAlpha(this.card_horz, 1.0)

        tweenAlpha(this.current_flag, 0.0)

        //tweenAlpha(this.flag_stroke, 0.0)

        this.current_country_text.destroy()
        this.current_flag.destroy()

        //obj.tint = convertColor(colour);
        //tweenTint(obj, '0x000000', '0xffffff', 150)
        //this.world_stroke.alpha = 0.0
        //obj_stroke.alpha = 0.0
        tweenAlpha(obj_stroke, 0.0)

        // card icons, GROUP THIS!!!
        tweenAlpha(this.card_population, 0.0)
        tweenAlpha(this.card_population_ring, 0.0)

        tweenAlpha(this.card_area, 0.0)
        tweenAlpha(this.card_area_ring, 0.0)

        tweenAlpha(this.card_capital, 0.0)
        tweenAlpha(this.card_capital_ring, 0.0)

        tweenAlpha(this.card_currency, 0.0)
        tweenAlpha(this.card_currency_ring, 0.0)

        tweenAlpha(this.card_government, 0.0)
        tweenAlpha(this.card_government_ring, 0.0)

        tweenAlpha(this.card_leader, 0.0)
        tweenAlpha(this.card_leader_ring, 0.0)

        tweenAlpha(this.card_language, 0.0)
        tweenAlpha(this.card_language_ring, 0.0)

        tweenAlpha(this.card_religion, 0.0)
        tweenAlpha(this.card_religion_ring, 0.0)

        tweenAlpha(this.card_www, 0.0)
        tweenAlpha(this.card_www_ring, 0.0)

        ////
        tweenAlpha(this.card_population_value, 0.0)
        tweenAlpha(this.card_population_suffix, 0.0)

        tweenAlpha(this.card_language_value, 0.0)
        //tweenAlpha(this.card_language_suffix, 0.0)

        tweenAlpha(this.card_capital_value, 0.0)
        //tweenAlpha(this.card_capital_suffix, 0.0)

        tweenAlpha(this.card_area_value, 0.0)
        tweenAlpha(this.card_area_suffix, 0.0)

        tweenAlpha(this.card_government_value, 0.0)
        tweenAlpha(this.card_government_suffix, 0.0)

        tweenAlpha(this.card_leader_value, 0.0)
        //tweenAlpha(this.card_leader_suffix, 0.0)

        tweenAlpha(this.card_religion_value, 0.0)
        //tweenAlpha(this.card_religion_suffix, 0.0)

        tweenAlpha(this.card_currency_value, 0.0)
        //tweenAlpha(this.card_currency_suffix, 0.0)

        tweenAlpha(this.card_www_value, 0.0)
        //tweenAlpha(this.card_www_suffix, 0.0)
	},

    // hard to move, return all to this.?
    printGradientValues: function(val_left, val_right, unit) {
        let dec = 1
        let format_num_right = formatNumber(val_right, dec, 'scientific')
        let format_num_left = formatNumber(val_left, dec, 'scientific')
        //console.log(format_num_right['num'])
        //console.log(format_num_right['suffix'])
        //console.log(format_num_left['num'])
        //console.log(format_num_left['suffix'])

        // left unit and value
        this.unit_l = game.add.text(GRAD_XPOS - GRAD_XPAD, RES_Y - GRAD_YPAD + 1, format_num_right['suffix'] + unit, STYLE_UNIT_L); // note 'right' because nonexisting suffix else
        this.unit_l.setTextBounds(0, 0, 0, 0)
        var bounds_l = this.unit_l.getLocalBounds()
        this.value_min = game.add.text(GRAD_XPOS - GRAD_XPAD - bounds_l['width'], RES_Y - GRAD_YPAD + 1, format_num_left['value'], STYLE_NUM_L);
        this.value_min.setTextBounds(0, 0, 0, 0)

        // right unit and value
        this.value_max = game.add.text(GRAD_XPOS + GRAD_LEN + GRAD_XPAD, RES_Y - GRAD_YPAD + 1, format_num_right['value'], STYLE_NUM_R);
        this.value_max.setTextBounds(0, 0, 0, 0)
        var bounds_r = this.value_max.getLocalBounds()
        this.unit_r = game.add.text(GRAD_XPOS + GRAD_LEN + GRAD_XPAD + bounds_r['width'], RES_Y - GRAD_YPAD + 1, format_num_right['suffix'] + unit, STYLE_UNIT_R);
        this.unit_r.setTextBounds(0, 0, 0, 0)

        //FOR, max/min, steps, round
        //var gradient_steps;
        var slices = 10 // 10 equals 10.0% marks in 100%
        var steps_perc = []
        for (let i = 0; i < slices; i++) {
            steps_perc[i] = (1/slices) * i
        }
        //console.log(steps_perc)
        steps_perc = steps_perc.slice(1)

        this.gradient_steps = [] // clear
        //this.gradient_divider = [] // clear
        for (let i = 0; i < steps_perc.length; i++) {
          this.gradient_steps[i] = game.add.text(GRAD_XPOS + (GRAD_LEN * steps_perc[i]), RES_Y - 20, roundDec(format_num_right['value'] * steps_perc[i], 1), GRADIENT_STEP_STYLE);
          //this.gradient_steps[i].stroke = COLOR['BLACK'];
          //this.gradient_steps[i].strokeThickness = 2;
          //this.gradient_steps[i].setTextBounds(0, 0, 0, 0)
          //let bounds_step = this.gradient_steps[i].getLocalBounds()
          this.gradient_steps[i].setTextBounds(0, 0, 0, 0)

          //console.log(this.gradient_divider.width)
          this.gradient_divider[i] = game.add.sprite(GRAD_XPOS + (GRAD_LEN * steps_perc[i]) - (this.gradient_divider.width/2), RES_Y - GRAD_YPAD - 1 + 8, 'gradient_divider');
          // (bounds_step['width']/2)
          // (bounds_step['width']/2)
        }
    },

    createMenuButton: function(id, x, y) {
        let button = game.add.sprite(x, y, id);
        button.tint = convertColor(COLOR['MENU_NONACTIVE']);
        button.anchor.y = 0.5;
        button.anchor.x = 0.5;
        this.addButton(button);

        return button
    },

    createMenuButtonText: function(id, x, y) {
        let button_text = game.add.sprite(x, y, id);
        //button_text.tint = convertColor(COLOR['MENU_NONACTIVE']); // USE
        button_text.alpha = 0.0;
        button_text.anchor.y = 0.5;
        button_text.anchor.x = 0.5;

        return button_text
    }

};
