/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
setShadowDOM(true);
navigateTo("https://s2.supplier.avantorsciences.com/productmanagement/login.zul");
setValue(fallback(`textbox("j_username")`,
   `textbox(0, _in(div({'id':'xS7St'})))`,
   `byXPath('//*[@id="xS7Sv"]')`,
   `textbox("login z-textbox")`,
   `byXPath('//*[@name="j_username"]')`,
   `textbox("xS7Sv")`,
   `byXPath("//input[@id='xS7Sv']")`,
   `byXPath('//*[@class="login z-textbox"]')`,
   `byXPath('/html/body/div/div/div/div/div/form/div/table/tbody/tr/td/table/tbody/tr/td/div/table/tbody/tr/td/table/tbody/tr/td[3]/div/input')`,
   `byXPath("id('xS7Sv')")`,
   `byXPath('//tbody//tr[1]//td[3]//div//input[@id="xS7Sv"]')`,
   `byXPath('//tbody//tr[1]//td[3]//div//input[@class="login z-textbox"]')`,
   `byXPath('//tbody//tr[1]//td[3]//div//input[@name="j_username"]')`,
   `textbox({'type':'text'})`,
   `byJQuery('div[class="compRowCnt z-div"] > input[class="login z-textbox"]')`,
   `byJQuery('#xS7Sv')`,
   `byJQuery('input[name="j_username"]')`,
   `byJQuery('input[value=""]')`,
   `textbox(0, _in(div("xS7St")))`),"vendor_test1");
setValue(fallback(`password("j_password")`,
   `password(0, _in(div({'id':'xS7Sy'})))`,
   `byXPath('//*[@id="xS7S_0"]')`,
   `password("login z-textbox z-textbox-hover")`,
   `byXPath('//*[@name="j_password"]')`,
   `password("xS7S_0")`,
   `byXPath("//input[@id='xS7S_0']")`,
   `byXPath('//*[@class="login z-textbox z-textbox-hover"]')`,
   `byXPath('/html/body/div/div/div/div/div/form/div/table/tbody/tr/td/table/tbody/tr/td/div/table[2]/tbody/tr/td/table/tbody/tr/td[3]/div/input')`,
   `byXPath("id('xS7S_0')")`,
   `byXPath('//tbody//tr[1]//td[3]//div//input[@id="xS7S_0"]')`,
   `byXPath('//tbody//tr[1]//td[3]//div//input[@class="login z-textbox z-textbox-hover"]')`,
   `byXPath('//tbody//tr[1]//td[3]//div//input[@name="j_password"]')`,
   `password({'type':'password'})`,
   `byJQuery('div[class="compRowCnt z-div"] > input[class="login z-textbox z-textbox-hover"]')`,
   `byJQuery('#xS7S_0')`,
   `byJQuery('input[name="j_password"]')`,
   `password(0, _in(div("xS7Sy")))`),"vendor");
click(fallback(`button("Sign In")`,
   `button(0, _in(div({'id':'vG4Pl'})))`,
   `byXPath('//*[@id="vG4Po"]')`,
   `button("login_btn y-btn-primary z-button")`,
   `button("vG4Po")`,
   `byXPath("//button[@id='vG4Po']")`,
   `byXPath('//*[@class="login_btn y-btn-primary z-button"]')`,
   `byXPath('//*[text()="Sign In"]')`,
   `byXPath('/html/body/div/div/div/div/div/form/div/table/tbody/tr/td/table/tbody/tr[5]/td/div/button')`,
   `byXPath("id('vG4Po')")`,
   `byXPath('//tbody//tr[5]//td[1]//div//button[@id="vG4Po"]')`,
   `byXPath('//tbody//tr[5]//td[1]//div//button[@class="login_btn y-btn-primary z-button"]')`,
   `byXPath('//tbody//tr[5]//td[1]//div//button[text()="Sign In"]')`,
   `byJQuery('div[class="login-footer login-footer_row z-div"] > button[class="login_btn y-btn-primary z-button"]')`,
   `byJQuery('#vG4Po')`,
   `button(0, _in(div("vG4Pl")))`));
navigateTo("https://s2.supplier.avantorsciences.com/productmanagement/");
click(fallback(`button("More Actions[1]")`,
   `button(0, _in(cell({'id':'iZdRxh1-chdex'})))`,
   `byXPath('//*[@id="iZdRxh1"]')`,
   `button("cng-font-icon y-btn-transparent yw-show-menu-action z-button[1]")`,
   `button("iZdRxh1")`,
   `byXPath("//button[@id='iZdRxh1']")`,
   `byXPath('/html/body/div/div/div/div[2]/div[2]/div/div[2]/div/div[2]/div/div[2]/div[2]/div[2]/div/div/div[2]/div/div/div[2]/div[4]/div/div[2]/div/div/div/div[2]/div/div[2]/div[2]/div/table[2]/tbody/tr/td/table/tbody/tr/td[3]/button')`,
   `byXPath("id('iZdRxh1')")`,
   `byXPath('//tbody//tr[1]//td[3]//button[@id="iZdRxh1"]')`,
   `byJQuery('#iZdRxh1')`,
   `button(0, _in(cell("iZdRxh1-chdex")))`));
click(fallback(`span("Download Template...")`,
   `span(0, _in(div({'id':'iZdR0i1'})))`,
   `byXPath('//*[@id="iZdR1i1"]')`,
   `span("z-label[15]")`,
   `span("iZdR1i1")`,
   `byXPath("//span[@id='iZdR1i1']")`,
   `byXPath('//*[text()="Download Template..."]')`,
   `byXPath('/html/body/div[3]/div/div/table/tbody/tr/td/table/tbody/tr/td/div/span')`,
   `byXPath("id('iZdR1i1')")`,
   `byXPath('//tbody//tr[1]//td[1]//div//span[@id="iZdR1i1"]')`,
   `byXPath('//tbody//tr[1]//td[1]//div//span[text()="Download Template..."]')`,
   `byJQuery('#iZdR1i1')`,
   `span(0, _in(div("iZdR0i1")))`));
click(fallback(`italic(0, _in(link("dC4Yws6-btn")))`,
   `italic(0, _in(link({'id':'dC4Yws6-btn'})))`,
   `byXPath('//*[@id="dC4Yws6-icon"]')`,
   `italic("z-combobox-icon z-icon-caret-down")`,
   `italic("dC4Yws6-icon")`,
   `byXPath("//i[@id='dC4Yws6-icon']")`,
   `byXPath('/html/body/div[5]/div[2]/div/div[2]/div/div/div[4]/div/div/div/div/div/div/div/span/a/i')`,
   `byXPath("id('dC4Yws6-icon')")`,
   `byJQuery('div[class="yw-wizard-property z-div"] > div[class="z-div"] > span[class="ye-de_hybris_platform_searchbackoffice_editors_configurabledropdown z-combobox z-combobox-readonly"] > a[class="z-combobox-button"] > i[class="z-combobox-icon z-icon-caret-down"]')`,
   `byJQuery('#dC4Yws6-icon')`));
click(fallback(`span("AR_Category_01")`,
   `span(1, _in(listItem({'id':'dC4Yft6'})))`,
   `span("z-comboitem-text")`,
   `byXPath("//li[@id='dC4Yft6']/span[2]")`,
   `byXPath('//*[@class="z-comboitem-text"]')`,
   `byXPath('//*[text()="AR_Category_01"]')`,
   `byXPath('/html/body/div[7]/ul/li/span[2]')`,
   `byXPath("id('dC4Yft6')/span[@class='z-comboitem-text']")`,
   `byJQuery('body[class="webkit chrome atlantic"] > div[class="z-combobox-popup ye-de_hybris_platform_searchbackoffice_editors_configurabledropdown z-combobox-open z-combobox-shadow"] > ul[class="z-combobox-content"] > li[class="z-comboitem"] > span[class="z-comboitem-text"]')`,
   `byJQuery('#dC4Yft6 > .z-comboitem-text')`,
   `span(1, _in(listItem("dC4Yft6")))`));
click(fallback(`italic("Filter List")`,
   `italic(0, _in(link({'id':'dC4Y2t6-btn'})))`,
   `byXPath('//*[@id="dC4Y2t6-icon"]')`,
   `italic("y-icon-reference-editor z-bandbox-icon")`,
   `italic("dC4Y2t6-icon")`,
   `byXPath("//i[@id='dC4Y2t6-icon']")`,
   `byXPath('//*[@class="z-bandbox-icon y-icon-reference-editor"]')`,
   `byXPath('/html/body/div[5]/div[2]/div/div[2]/div/div/div[4]/div/div/div/div/div[2]/div/div/div/span/a/i')`,
   `byXPath("id('dC4Y2t6-icon')")`,
   `byJQuery('i[title="Filter List"]')`,
   `byJQuery('div[class="z-div"] > div[class="ye-default-reference-editor ye-com_hybris_cockpitng_editor_defaultreferenceeditor z-div"] > span[class="ye-default-reference-editor-bandbox ye-default-reference-editor-bandbox-list-collapsed z-bandbox"] > a[class="z-bandbox-button"] > i[class="z-bandbox-icon y-icon-reference-editor"]')`,
   `byJQuery('#dC4Y2t6-icon')`,
   `italic(0, _in(link("dC4Y2t6-btn")))`));
click(fallback(`span("0000015057 - AB VECTOR LLC MS")`,
   `span(0, _in(div({'id':'uVAIpy6-cave'})))`,
   `byXPath('//*[@id="uVAIqy6"]')`,
   `span("z-label[15]")`,
   `span("uVAIqy6")`,
   `byXPath("//span[@id='uVAIqy6']")`,
   `byXPath('//*[text()="0000015057 - AB VECTOR LLC MS"]')`,
   `byXPath('/html/body/div[8]/div/div/div/div/table/tbody/tr/td/div/span')`,
   `byXPath("id('uVAIqy6')")`,
   `byXPath('//tbody//tr[1]//td[1]//div//span[@id="uVAIqy6"]')`,
   `byXPath('//tbody//tr[1]//td[1]//div//span[text()="0000015057 - AB VECTOR LLC MS"]')`,
   `byJQuery('tr[class="z-listitem z-listitem-selected z-listitem-focus"] > td[class="z-listcell"] > div[class="z-listcell-content"] > span[class="z-label"]')`,
   `byJQuery('#uVAIqy6')`,
   `span(0, _in(div("uVAIpy6-cave")))`));
click(fallback(`button("Export")`,
   `button(0, _in(div({'id':'dC4Y9t6'})))`,
   `byXPath('//*[@id="dC4Yat6"]')`,
   `button("yw-btn-primary z-button")`,
   `button("dC4Yat6")`,
   `byXPath("//button[@id='dC4Yat6']")`,
   `byXPath('//*[@class="yw-btn-primary z-button"]')`,
   `byXPath('//*[text()="Export"]')`,
   `byXPath('/html/body/div[5]/div[2]/div/div[2]/div/div/div[4]/div/div/div[2]/div/div[2]/div[2]/button')`,
   `byXPath("id('dC4Yat6')")`,
   `byJQuery('div[class="z-vlayout-inner"] > div[class="yw-wizard-navigation z-div"] > div[class="yw-right-pack z-div"] > div[class="yw-component-wrapper z-div"] > button[class="yw-btn-primary z-button"]')`,
   `byJQuery('#dC4Yat6')`,
   `button(0, _in(div("dC4Y9t6")))`));
wait(5000);
