<template>
  <div class="helper-content">
    <div class="helper-title">
      <p>{{articleData.title}}</p>
    </div>
    <div class="item-content">
      <div v-if="articleData.id == 0">
        <p class="emphasize">建议安装加速器，以便能临时访问Steam和使用Steam服务</p>
        <p class="title-strong" style="margin-top: 20px">PC端解决方案</p>
        <p>安装加速器加速Steam商店社区</p>
        <p>推荐：UU加速器（免费加速steam社区）</p>
        <p>如果安装加速器后无法加速，请更换其他浏览器尝试</p>

        <p class="title-strong" style="margin-top: 20px">移动端操作步骤</p>
        <p>1、在手机APP Store或应用商店搜索“UU加速器”APP，下载安装。</p>
        <p>2、安装成功后，打开搜索“steam”，点击加速</p>
        <p>3、加速器软件正常使用，用户按照正常存入、取回流程操作即可</p>
      </div>

      <div v-if="articleData.id == 1">
        <p class="title-strong">交易限制</p>
        <p style="line-height: 30px">为了保护玩家的账户安全， Steam官方会因为用户的一些操作而限制其账户进行交易 平台遵循Steam官方市场交易准则交易。交易限制期间的用户将无法取回购买的物品</p>
        <p class="title-strong">如何查看是否有交易限制</p>
        <p style="line-height: 30px">您可以通过尝试发起一次交易报价便会有所提示。</p>
        <p class="title-strong">如何解除交易限制</p>
        <p style="line-height: 30px">无法解除，只能等待限制时间结束 Steam客服不会修改交易或 Steam 社区市场中的限制，无论您的帐户出于何种原因受限我们同样无权解除用户账户的限制，有交易限制的用户等限制解除之后即可交易</p>
        <p class="title-strong">交易限制原因</p>
        <p style="line-height: 30px">Steam 令牌未启用 为防止您的物品和 Steam账户被非法获取您密码的人盗用， Steam官方要求您启用Steam手机令牌超过15天 如果您启用Steam令牌不到15 天，您将无法交易。</p>
        <p style="line-height: 30px">您可以通过手机直接下载Steam Mobile, 开通Steam令牌，等待15天的冷却时间便可解除限制</p>
        <p class="title-strong">最近重置过密码</p>
        <p style="line-height: 30px">如果您重置了您的密码，您将在 5 天内无法进行交易 如果您的帐户超过 2 个月没有任何活动，您将在 30 天内无法进行交易</p>
        <p class="title-strong">新设备登陆</p>
        <p style="line-height: 30px">如果您在一台受 Steam令牌保护不到7天的设备上登录，您在7天内将无法进行交易或使用社区市场</p>
        <p style="line-height: 30px">在其它被Steam令牌保护超过7天的设备上仍然可以进行交易或使用社区市场 清除您的浏览器 Cookie、使用新的浏览器、重新安装Steam和格式化等操作将触发此限制</p>
        <p class="title-strong">账户封禁</p>
        <p style="line-height: 30px">如果您的帐户被 Steam封禁交易，可能会被临时或永久性的交易封禁</p>
        <p class="title-strong">其他限制类型</p>
        <p style="line-height: 30px">近期取消交易报价、更改邮箱等，其他限制原因在您尝试发起一次报价的时候便会有提示的。</p>
        <p style="line-height: 30px">更多关于Steam账户安全及账户限制详情请参考文章：</p>
        <p> <a target="_blank" href="https://support.steampowered.com/kb_article.php?ref=1047-EDFM-2932&l=simplified%20chinese">https://support.steampowered.com/kb_article.php?ref=1047-EDFM-2932&l=simplified%20chinese</a>
        </p>

      </div>

      <div v-if="articleData.id == 2"></div>

      <div v-if="articleData.id == 3">
        <p class="emphasize">若您在取回饰品时，提示缺货：</p>
        <p>1、您可以通过兑换商城、汰换合约等功能，将缺货饰品兑换成其他有货的。</p>
        <p>2、联系在线客服补货</p>
        <p>3、加入QQ群联系客服、管理员进行补货</p>
      </div>

      <div v-if="articleData.id == 4">
        <p style="line-height: 25px">您同意在我们的网站上注册账户或以其他方式使用我们的服务，即表示您同意以下条款和条件(“条款”)。如果您不同意这些条款，请勿注册账户或以其他方式使用我们的服务。 请注意，您对服务的使用也受我们隐私政策的约束。本公司保留随时更新条款和隐私政策的权利，恕不另行通知。</p>
        <p class="title-strong">1 .定义</p>
        <p style="line-height: 25px">账户: 用户在平台上为访问服务而创建的一个或多个账户。</p>
        <p style="line-height: 25px">平台: 公司和/或其附属机构发布的平台，允许用户与其他用户交换通证。该平台不允许用户将通证交换为法定货币。</p>
        <p style="line-height: 25px">服务: 通过网站、附属网站、应用程序和平台提供的任何服务。</p>
        <p style="line-height: 25px">网站: 91csgo，网址为: https://www.91csgo.com/</p>
        <p style="line-height: 25px">用户: 任何服务的用户(此处对“您”或“您的”的所有引用均指每个用户)。</p>
        <p class="title-strong">2 .资格、限制区域和允许用途资格。 通过访问服务，您需保证:</p>
        <p style="line-height: 25px">( 1 )年龄至少为18岁，或至少为适用法律规定的最低年龄，以便我们无需经过您父母同意即可合法向您提供服务；</p>
        <p style="line-height: 25px">( 2 )加入这些条款(并且在法律上有能力这样做)；</p>
        <p style="line-height: 25px">( 3 )所在国家适用法律不禁止访问和使用服务；</p>
        <p style="line-height: 25px">( 4 )未有过因违法操作，被暂停交易或者调离交易现场的记录；</p>
        <p style="line-height: 25px">( 5 )拥有您在平台上使用的所有通证(或您能够与之进行授权交易的通证)；</p>
        <p style="line-height: 25px">( 6)拥有全部必要的同意和授权，以执行从您的账户发起的全部交易；</p>
        <p style="line-height: 25px">( 7 )提供真实、准确、完整的开户资料；</p>
        <p style="line-height: 25px">( 8 )已审阅本条款所载的风险披露声明，并同意承担其中所述的所有风险。
          允许使用。 您同意在访问服务时遵守所有适用的法律和法规。您同意不将服务用于任何非法活动，包括但不限于非法赌博、洗钱、欺诈、敲诈、勒索、数据交换、资助恐怖主义或其他暴力活动。您还同意，您不会对平台、站点和应用程序进行黑客、反编译、反向工程、反汇编、尝试获取源代码、解密或以其他方式损害其完整性和安全性。</p>
        <p class="title-strong">3 .账户</p>
        <p style="line-height: 25px">您必须创建账户才能访问和使用服务，并且必须提供有效的电子邮件地址才能创建账户。您必须在创建账户时提供完整、准确和最新的信息，并在发生任何更改时立即更新这些信息。您可以请求公司删除或去除您提供的任何信息；但是，您承认并同意公司可以拒绝您的请求或恢复以前删除和去除的任何信息。您必须对您账户下发生的所有活动负责，并承担未经授权访问的所有风险。您同意维护登录凭证的安全性和机密性，并拒绝在未经授权的情况下(无论是通过站点、应用程序还是其他方式)访问您的账户。如果您发现或怀疑任何未经授权访问或使用您的账户，必须立即通知公司。</p>
        <p style="line-height: 25px">您同意公司：有权限制任何用户或关联公司能够创建的账户数量。</p>
        <p style="line-height: 25px">您同意本公司保留：随时以任何理由终止您的账户的权利和唯一决定权。</p>
        <p class="title-strong">4 .风险披露表</p>
        <p>（A）技术</p>
        <p style="line-height: 25px">复杂性。 通证一般用非常技术性的语言描述；需要对应用密码学和计算机科学有全面的了解，才能认识到固有的风险。通过使用本服务，您表示并保证您拥有足够的知识、市场成熟度、经验和/或专业建议，足以对您根据本服务所进行的所有交易的价值和风险进行审慎评估。您同意承担上述评估的全部责任。</p>
        <p style="line-height: 25px">网络攻击。 如果平台、应用程序、站点或服务的任何其他组件遭到网络攻击，您的账户和其中的通证可能会受到不利影响。本公司及其附属公司均不保证其在发生此类攻击时可预见、预防、减轻或采取纠正措施。</p>
        <p style="line-height: 25px">暂停/停止支助/撤出。 如果在平台上交易的特定通证发生分叉或网络攻击，您同意公司可以暂时中止相关通证的服务(无论是否事先通知您)，并且公司可以不支持(或停止支持) 分叉通证。如果可行，公司将为您提供收回此类通证的机会。有关受攻击通证的存款、提款和用户余额的决议将由公司根据具体情况自行决定。本公司不就平台的安全性做出任何陈述或保证，也不对任何价值损失或被盗财产负责，无论本公司是否疏忽提供适当的安全性。</p>
        <p>（B）交易失败；网上存款条款</p>
        <p style="line-height: 25px">平台上的交易可能由于若干原因而失败，包括但不限于价格变化。本公司不对任何交易的正常执行做出任何陈述或保证。本公司特此声明：放弃负责因任何交易失败而产生、或与任何交易失败相关的所有损失和损害。您同意并承认公司并没有责任通知交易失败。 公司可在任何时候拒绝执行交易、施加交易金额的限制或约束，无需事先通知，并可自行决定。具体而言，如果公司怀疑可能存在洗钱、资助恐怖主义、欺诈或任何其他非法行为，或者公司怀疑交易违反了相关服务条款[这些条款是指？](例如，涉及开设账户和随后关闭账户而不进行任何实际交易的交易)，公司保留拒绝处理、取消或撤销任何交易和禁用用户账户的权利。虽然公司可酌情撤销交易，但用户不得更改、撤回或取消其交易授权，但部分填写的订单除外。 本公司可更正、冲销或取消任何因处理交易指示错误及其他原因而影响的交易。如果出现错误，您的补救措施将受到限制。我们不能保证此类取消或退款始终是可能的。 公司的平台运行使得每个用户的订单与其他用户的订单相匹配。根据下订单时的交易活动，可以部分填写订单或填写多个订单。 您确认公司为每个账户提供加密通证存储功能，以便进行交易。</p>
        <p >（C）中止</p>
        <p style="line-height: 25px">本公司有权随时终止先前提供的通证可用性。在这种情况下，公司将为您提供收回这些通证的机会。</p>
        <p class="title-strong">5 .许可限制</p>
        <p style="line-height: 25px">本公司授予您有限、非排他性、不可转让的许可，允许您访问和使用本服务(无论是通过应用程序还是网站)，仅用于本服务的预期功能以及本公司明确允许的其他批准用途。明确禁止任何其他使用服务的行为。</p>
        <p style="line-height: 25px">使用应用程序时，您同意不会去:</p>
        <p style="line-height: 25px">( A )反编译、反向工程、反汇编、尝试导出应用程序的源代码或解密应用程序；</p>
        <p style="line-height: 25px">( B )对应用程序进行任何修改、改编、改进、增强、翻译或衍生作品；</p>
        <p style="line-height: 25px">( C )违反与您访问或使用应用程序相关的任何适用法律、规则或法规；</p>
        <p style="line-height: 25px">( D )将该应用程序用于并非设计或意图用于的任何其他目的；</p>
        <p style="line-height: 25px">( E )通过网络提供应用程序，或以其他方式允许多个移动设备或用户同时访问或使用该应用程序；</p>
        <p style="line-height: 25px">( F )通过网络提供应用程序，或以其他方式允许多个移动设备或用户同时访问或使用该应用程序；</p>
        <p style="line-height: 25px">( G )使用应用程序向任何网站发送自动查询或发送任何未经请求的商业电子邮件；</p>
        <p style="line-height: 25px">( H )未经授权使用公司或其关联公司的专有信息或知识产权(包括但不限于商标)。</p>
        <p class="title-strong">6 .用户行为守则</p>
        <p >使用或访问服务时，您同意不会:</p>
        <p style="line-height: 25px">( A )通过密码挖掘或其他方式获取或企图获取对网站、其他用户账户或服务任何其他组成部分的未经授权访问；</p>
        <p style="line-height: 25px">( B )在网站或服务的任何组成部分上使用或企图使用网络爬虫；</p>
        <p style="line-height: 25px">( C )对我们的基础设施造成巨大负担；</p>
        <p style="line-height: 25px">( D )将含有计算机病毒、特洛伊木马或蠕虫的任何材料上载到网站。</p>
        <p class="title-strong">7 .隐私政策相关</p>
        <p style="line-height: 25px">你的隐私对我们很重要。但是，我们可能被迫根据相应的法律、规则或法规共享您的信息。有关详细信息，请参阅我们的《隐私政策》。</p>
        <p class="title-strong">8 .反洗钱和验证用户身份政策</p>
        <p style="line-height: 25px">公司执行银行层面的(“验证用户身份”)流程，以遵守反洗钱( AML )法律。该公司对照政府观察名单对用户数据进行交叉核对。如果用户或用户的交易被标记为可疑，公司将要求用户提供额外的身份证明，并可暂停该用户的任何交易、存款或提款，直至收到令公司满意的身份证明。</p>
        <p style="line-height: 25px">公司对用户验证级别使用内部政策。本公司有权利为任何用户确定适当验证级别和标准的，以及在不事先通知的情况下降低用户级别的权利。公司可随时执行措施，根据国籍、居住国或任何其他因素限制核查水平和标准。</p>
        <p style="line-height: 25px">您同意，如果无法达到所需的验证级别，则可能无法存放或提取通证。您同意独自承担责任，不要求公司或其关联公司对此类损失承担责任。</p>
        <p style="line-height: 25px">您特此授权公司直接（或通过第三方）进行任何我们所认为必要的查询，以验证您的身份并/或防止欺诈行为的发生，包括查询公开报告中包含的身份信息(例如您的姓名、地址、过去地址或出生日期)，查询与您关联的银行账户相关的账户信息(例如姓名或账户余额)，并根据此类查询和报告的结果采取我们认为合理且必要的行动。您还授权可能收到此类查询或请求的任何和所有第三方对此类查询或请求做出全面响应。</p>
        <p class="title-strong">9 .不可转让性</p>
        <p style="line-height: 25px">虽然向用户提供的账户和服务不可转让，但公司有权将账户和服务的所有权、利益进行义务转让、转让或出售给任何人，这些条款对公司或其贷款人的继承人和受让人(如有)继续有效。</p>
        <p class="title-strong">10 .永久性撤回服务</p>
        <p style="line-height: 25px">公司有权暂停或终止您对服务的访问。以及如果公司根据适用的法律、规则或法规，怀疑您或其他人使用您的账户从事非法活动，则可以停用或取消您的账户。在这种情况下，除非另有相应的法律禁止，否则您可以在账户停用或取消后 60天内转让与您的账户相关的通证。如果您的账户在被取消或暂停时，任何交易处于挂起状态，则可根据需要取消或退还此类交易。</p>
        <p style="line-height: 25px">通证返还流程：公司注销您的账户——您授权公司取消或暂停挂起交易——公司通过服务或应用程序向您发出通知——与交易相关联的通证会返回公司为您保留的钱包地址。如果本公司无法通过合理的商业努力将您的通证归还给CoinFit为您存档的钱包地址，本公司可根据香港无人认领财产法向适用的政府机构报告和汇寄通证。</p>
        <p class="title-strong">11 .免责声明与免责事项</p>
        <p style="line-height: 25px">用户了解并同意，在任何情况下，我们不就以下各事项承担责任：</p>
        <p style="line-height: 25px">(1)收入的损失；</p>
        <p style="line-height: 25px">(2)交易利润或合同损失；</p>
        <p style="line-height: 25px">(3)业务中断；</p>
        <p style="line-height: 25px">(4)预期可节省的货币的损失；</p>
        <p style="line-height: 25px">(5)信息的损失；</p>
        <p style="line-height: 25px">(6)机会、商誉或声誉的损失；</p>
        <p style="line-height: 25px">(7)数据的损坏或损失；</p>
        <p style="line-height: 25px">(8)购买替代产品或服务的成本；</p>
        <p style="line-height: 25px">(9)数字资产消亡或退出市场；</p>
        <p style="line-height: 25px">(10)任何由于侵权（包括过失）、违约或其他任何原因产生的间接的、特殊的或附带性的损失或损害，不论这种损失或损害是否可以为我们合理预见；不论我们是否事先被告知存在此种损失或损害的可能性。</p>
        <p style="line-height: 25px">（1）条至（10）条均是彼此独立的。</p>
        <p style="line-height: 25px">用户了解并同意，我们不对因下述任一情况而导致用户的任何损害赔偿承担责任：</p>
        <p style="line-height: 25px">(1)我们有合理理由认为用户的具体交易事项可能存在重大违法或违约情形。</p>
        <p style="line-height: 25px">(2) 我们有合理的理由认为用户在我们的行为涉嫌违法或不当。</p>
        <p style="line-height: 25px">(3) 通过我们服务购买或获取任何数据、信息或进行交易等行为或替代行为产生的费用及损失。</p>
        <p style="line-height: 25px">(4)用户对本网站服务的误解。</p>
        <p style="line-height: 25px">(5)非因我们的原因而造成用户信息被泄露、毁损或灭失。</p>
        <p style="line-height: 25px">(6)任何非因我们的原因而引起的与我们提供的服务有关的其它损失。</p>
        <p style="line-height: 25px">(7)我们不能保证我们包含的全部信息、程序、文本等完全安全，不受任何病毒、木马等恶意程序的干扰和破坏，故用户登录、使用我们任何服务或下载及使用该下载的任何程序、信息、数据等均是用户个人的决定并自行承担风险及可能产生的损失。</p>
        <p style="line-height: 25px">(8)我们对我们链接的任何第三方网站的任何信息、产品及业务及其他任何形式的不属于我们的主体的内容等不做任何保证和承诺，用户如果使用第三方网站提供的任何服务、信息及产品等均为用户个人决定且承担由此产生的一切责任。</p>
        <p style="line-height: 25px">(9)我们对于用户使用我们服务不做任何明示或暗示的保证，包括但不限于我们提供服务的适用性、没有错误或疏漏、持续性、准确性、可靠性、适用于某一特定用途。同时，我们也不对我们提供的服务所涉及的技术及信息的有效性、准确性、正确性、可靠性、质量、稳定、完整和及时性作出任何承诺和保证。是否登录或使用我们提供的服务是用户个人的决定且自行承担风险及可能产生的损失。我们对于数字资产的市场、价值及价格等不做任何明示或暗示的保证，用户理解并了解数字资产市场是不稳定的，价格和价值随时会大幅波动或崩盘，交易数字资产是用户个人的自由选择及决定且自行承担风险及可能产生的损失。</p>
        <p style="line-height: 25px">(10)协议中规定的我们的保证和承诺是由我们就本协议和我们提供的服务的唯一保证和陈述，并取代任何其他途径和方式产生的保证和承诺，无论是书面的或口头的，明示的或暗示的。所有这些保证和陈述仅仅代表我们自身的承诺和保证，并不保证任何第三方遵守本协议中的保证和承诺。</p>
        <p style="line-height: 25px">(11)我们并不放弃本协议中未提及的在法律适用的最大范围内我们享有的限制、免除或抵销我们损害赔偿责任的任何权利。</p>
        <p class="title-strong">12 .适用法律和争议解决</p>
        <p style="line-height: 25px">使用条款应受香港法律管辖，并应在所有方面解释为香港合同。由本使用条款引起或与本使用条款相关的任何索赔或诉讼(包括侵权索赔)应受香港法律管辖，并根据香港法律进行解释和执行。</p>
        <p style="line-height: 25px">为加快并控制争议成本，您同意，您使用服务或本条款、或您使用服务或本条款相关的任何法律引起的索赔，包括本条款的形成、有效性、可执行性、范围或适用性(以下简称“索赔”)将按以下方式解决:除了禁令或衡平法上的救济索赔或知识产权索赔(可在任何主管法院提起而无需出具保函)之外，您使用服务引起的任何争议应根据香港国际仲裁中心(以下简称“仲裁中心”)通过保密、有约束力的仲裁最终解决。这意味着，除知识产权诉讼之外的所有索赔，如版权或商标侵权诉讼，或寻求非金钱救济的索赔，都将受到具有约束力的仲裁。仲裁应以英文在香港进行，仲裁决定可在任何法院执行。</p>
        <p style="line-height: 25px">要开始仲裁程序，您必须通过邮件发送一封请求仲裁的信函，并向我们描述您的索赔要求。</p>
        <p class="title-strong">13 .没有集体诉讼</p>
        <p style="line-height: 25px">您和公司只能以您或其个人身份对另一方提出索赔，而不能在任何声称的类别、代表、合并或多索赔人诉讼中作为原告或类别成员提出索赔。 你和公司都放弃了陪审团审判的权利。</p>
        <p class="title-strong">14 .可分性；弃权</p>
        <p style="line-height: 25px">如果本条款中的任何条款被视为非法、无效或由于任何原因无法执行，则该条款应被视为可与本条款分离，且不会影响任何剩余条款的有效性和执行性。本公司延迟或未能执行其任何权利不应构成对该等权利的持续放弃。</p>
        <p class="title-strong">15 .整合</p>
        <p style="line-height: 25px">本条款以及公司发布的任何政策或运营规则构成您与公司之间的完整协议和了解，并取代您与公司之间以前或同时期的任何形式的协议、沟通和建议(包括但不限于本条款的任何以前版本)。</p>
        <p class="title-strong">16 .不可抗力因素</p>
        <p style="line-height: 25px">除上述适用免责声明外，如果由于超出公司合理控制范围的原因(包括但不限于天灾、任何政府行为、战争或其他敌对行为、内乱、火灾、水灾、暴风雪、地震、爆炸、禁运、恐怖主义行为、停电、设备故障、劳资纠纷或争议、任何第三方数据提供商或其他第三方信息提供商的行为、第三方软件或通信方法中断)而导致中断和/或延迟，公司应免除履行本条款。</p>
        <p class="title-strong">17 .修正</p>
        <p style="line-height: 25px">公司可随时修改、删除或以其他方式修改本使用条款和隐私政策中的任何条款；前提是，公司至少在修改前七天，通过您在公司存档的电子邮件向您发出通知。</p>
        <p class="title-strong">18 .暂停和终止服务</p>
        <p style="line-height: 25px">公司可出于任何原因，在事先通知或不事先通知您的情况下，暂停和终止服务。您承认并同意，如果市场状况不稳定、不合理，公司可在事先通知或不通知您的情况下，通过启动交易限制或其他适当的措施，终止服务。</p>
      </div>

      <div v-if="articleData.id == 5">
        <p style="line-height: 25px">www.91csgo.com 以下统称“91csgo”之用户（以下统称“用户”或“您”）的隐私。您在使用91csgo服务时，我们可能会收集和使用您的相关信息。 本《隐私政策》适用于我们提供的一切91csgo服务。当您使用我们任何单项服务时，您同意接受本《隐私政策》以及我们在该单项服务中发出的特定隐私信息类政策条款（下列称“特定条款”）的保护，在此情况下特定条款与本政策条款同时对您产生效力。 请注意我们不时地会检查我们的政策，因此有关的措施会随之变化。我们恳请您定期光顾本页面，以确保对我们《隐私政策》最新版本始终保持了解。在阅读完本政策之后，如您对本《隐私政策》或与本《隐私政策》相关的事宜有任何问题，请与91csgo客服联系。 您使用或继续使用91csgo服务，都表示您同意我们按照本《隐私政策》收集、使用、储存和分享您的信息。</p>
        <p class="title-strong">一、我们可能收集的信息</p>
        <p style="line-height: 25px">（一）与个人身份无关的信息：</p>
        <p style="line-height: 25px">当您使用91csgo服务时，我们可能收集和汇总诸如用户的来源途径、访问顺序等信息，例如记录使用91csgo服务的每个用户的来源途径、浏览器软件等。</p>
        <p style="line-height: 25px">（二）有关个人身份的信息：</p>
        <p style="line-height: 25px">当您使用91csgo服务时，我们可能收集和汇总或要求您提供有关个人身份的信息，例如个人：生日、籍贯、性别、兴趣爱好、个人电话号码、（包括系统账号、IP地址、电子邮箱地址等）；个人财产信息（交易记录、余额、优惠券、游戏类兑换码等）；通讯信息；个人上网记录和日志信息（包括网站浏览记录、软件使用记录、点击记录、操作日志等）；设备信息（包括设备型号、设备MAC地址、操作系统类型、设备设置）；软件列表唯一设备识别码（如IMEI/android ID/IDFA/OPENUDID/GUID、SIM卡IMSI信息等在内的描述个人常用设备基本情况的信息）；位置信息（包括行程信息、精准定位信息、住宿信息、经纬度等）。
          我们收集您的信息主要是为了您和其他用户能够更容易和更满意地使用91csgo服务。91csgo的目标是向所有的互联网用户提供安全、刺激、有趣及有教益的上网经历。而这些信息有助于我们实现这一目标。</p>
        <p class="title-strong">二、我们如何收集和使用信息</p>
        <p style="line-height: 25px">（一）我们将通过以下途径收集和获得您的信息：</p>
        <p style="line-height: 25px">1、您提供的信息。 例如：</p>
        <p style="line-height: 25px">（1）您在注册91csgo服务的帐号或使用91csgo服务时，向我们提供的信息；</p>
        <p style="line-height: 25px">（2）您通过91csgo服务向其他方提供的共享信息，以及您使用91csgo服务时所储存的信息。</p>
        <p style="line-height: 25px">2、我们获取的您的信息。您在使用91csgo服务时，我们收集、汇总、记录的信息，例如日志信息、位置信息、设备信息等。</p>
        <p style="line-height: 25px">（二）COOKIES、日志档案和WEB BEACON</p>
        <p style="line-height: 25px">我们或我们的第三方合作伙伴可能通过COOKIES和WEB BEACON获取和使用您的信息，并将该等信息储存为日志信息。</p>
        <p style="line-height: 25px">通过使用COOKIES，我们向用户提供简单易行并富个性化的网络体验。一个COOKIES是少量的数据，它们从一个网络服务器送至您的浏览器并存在计算机硬盘上。我们使用COOKIES是为了让其用户可以受益。比如，为使得91csgo虚拟社区的登录过程更快捷，您可以选择把用户名存在一个COOKIES中。这样下次当您要登录91csgo的服务时能更加方便快捷。COOKIES能帮助我们确定您连接的页面和内容，您在91csgo特定服务上花费的时间和您所选择的91csgo服务。</p>
        <p class="title-strong">三、我们可能分享、转让或披露的信息</p>
        <p style="line-height: 25px">（一）分享</p>
        <p style="line-height: 25px">除以下情形外，未经您同意，我们不会与91csgo之外的任何第三方分享您的信息：</p>
        <p style="line-height: 25px">1、向您提供我们的服务。我们可能向合作伙伴及其他第三方分享您的信息，以实现您需要的核心功能或提供您需要的服务，例如：向物流服务商提供对应的订单信息；</p>
        <p style="line-height: 25px">2、实现本《隐私政策》第二条“我们如何收集和使用信息”部分所述目的；</p>
        <p style="line-height: 25px">3、履行我们在本《隐私政策》或我们与您达成的其他协议中的义务和行使我们的权利；</p>
        <p style="line-height: 25px">4、向委托我们进行推广的合作伙伴等第三方共享，但我们仅会向这些委托方提供推广的覆盖面和有效性的信息，而不会提供可以识别您身份的信息，例如姓名电话号码或电子邮箱；或者我们将这些信息进行汇总，以便它不会识别您个人。比如我们可以告知该委托方有多少人看了他们的推广信息或在看到这些信息后购买了委托方的商品，或者向他们提供不能识别个人身份的统计信息，帮助他们了解其受众或顾客。</p>
        <p style="line-height: 25px">5、在法律法规允许的范围内，为了遵守法律、维护我们及我们的关联方或合作伙伴、您或其他91csgo用户或社会公众利益、财产或安全免遭损害，比如为防止欺诈等违法活动和减少信用风险，我们可能与其他公司和组织交换信息。不过,这并不包括违反本《隐私政策》中所作的承诺而为获利目的出售、出租、共享或以其它方式披露的信息。</p>
        <p style="line-height: 25px">（二）转让</p>
        <p style="line-height: 25px">1、随着我们业务的持续发展，我们有可能进行合并、收购、资产转让或类似的交易，而您的信息有可能作为此类交易的一部分而被转移。我们会要求新的持有您信息的公司、组织继续受本《隐私政策》的约束，否则,我们将要求该公司、组织重新向您征求授权同意。</p>
        <p style="line-height: 25px">2、在获得您的明确同意后，我们会向其他方转让您的信息。</p>
        <p style="line-height: 25px">（三）披露</p>
        <p style="line-height: 25px">我们仅会在以下情况下，且采取符合业界标准的安全防护措施的前提下，才会披露您的信息：</p>
        <p style="line-height: 25px">1、根据您的需求，在您明确同意的披露方式下披露您所指定的信息；</p>
        <p style="line-height: 25px">2、根据法律、法规的要求、强制性的行政执法或司法要求所必须提供您信息的情况下，我们可能会依据所要求的信息类型和披露方式披露您的信息。在符合法律法规的前提下，当我们收到上述披露信息的请求时，我们会要求接收方必须出具与之相应的法律文件，如传票或调查函。我们坚信，对于要求我们提供的信息，应该在法律允许的范围内尽可能保持透明。我们对所有的请求都进行了慎重的审查，以确保其具备合法依据，且仅限于执法部门因特定调查目的且有合法权利获取的数据。</p>
        <p class="title-strong">四、我们如何保留、储存和保护信息</p>
        <p style="line-height: 25px">我们将采取以下手段保护您的信息：</p>
        <p style="line-height: 25px">（一）数据安全技术措施</p>
        <p style="line-height: 25px">我们会采用符合业界标准的安全防护措施，包括建立合理的制度规范、安全技术来防止您的信息遭到未经授权的访问使用、修改,避免数据的损坏或丢失。网络服务采取了多种加密技术，例如在某些服务中，我们将利用加密技术（例如SSL）来保护您的信息，采取加密技术对您的信息进行加密保存，并通过隔离技术进行隔离。 在信息使用时，例如信息展示、信息关联计算，我们会采用多种数据脱敏技术增强信息在使用中安全性。采用严格的数据访问权限控制和多重身份认证技术保护信息，避免数据被违规使用。</p>
        <p style="line-height: 25px">（二）我们为保护信息采取的其他安全措施</p>
        <p style="line-height: 25px">我们通过建立数据分类分级制度、数据安全管理规范、数据安全开发规范来管理规范信息的存储和使用。</p>
        <p style="line-height: 25px">我们通过信息接触者保密协议、监控和审计机制来对数据进行全面安全控制。</p>
        <p style="line-height: 25px">加强安全意识。我们还会举办安全和隐私保护培训课程，加强员工对于保护信息重要性的认识。</p>
        <p style="line-height: 25px">（三）我们仅允许有必要知晓这些信息的91csgo员工、合作伙伴访问您的信息，并为此设置了严格的访问权限控制和监控机制。我们同时要求可能接触到您的信息的所有人员履行相应的保密义务。如果未能履行这些义务，可能会被追究法律责任或被中止与91csgo的合作关系。</p>
        <p style="line-height: 25px">（四）我们会采取一切合理可行的措施，确保未收集无关的信息。</p>
        <p style="line-height: 25px">（五）互联网并非绝对安全的环境，而且电子邮件、即时通讯、社交软件或其他服务软件等与其他用户的交流方式无法确定是否完全加密，我们建议您使用此类工具时请使用复杂密码，并注意保护您的信息安全。</p>
        <p style="line-height: 25px">（六）互联网环境并非百分之百安全，我们将尽力确保或担保您发送给我们的任何信息的安全性。如果我们的物理、技术、或管理防护设施遭到破坏，导致信息被非授权访问、公开披露、篡改、或毁坏，导致您的合法权益受损，我们将承担相应的法律责任。</p>
        <p style="line-height: 25px">（七）安全事件处置</p>
        <p style="line-height: 25px">在通过91csgo服务与第三方进行沟通或购买商品及服务时，您不可避免的要向交易对方或潜在的交易对方披露自己的信息，如联络方式或者邮政地址等。请您妥善保护自己的信息，仅在必要的情形下向他人提供。</p>
        <p style="line-height: 25px">为应对信息泄露、损毁和丢失等可能出现的风险，我们制定了多项制度，明确安全事件、安全漏洞的分类分级标准及相应的处理流程。我们也为安全事件建立了专门的应急响应团队，按照安全事件处置规范要求，针对不同安全事件启动安全预案，进行止损、分析、定位、制定补救措施、联合相关部门进行溯源和打击。</p>
        <p style="line-height: 25px">在不幸发生信息安全事件后，我们将按照法律法规的要求，及时向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施等。我们同时将及时将事件相关情况以邮件、信函、电话、推送通知等方式告知您，难以逐一告知信息主体时，我们会采取合理、有效的方式发布公告。同时，我们还将按照监管部门要求，主动上报信息安全事件的处置情况。</p>
        <p style="line-height: 25px">请您理解，由于技术的限制以及风险防范的局限，即便我们已经尽量加强安全措施，也无法始终保证信息百分之百的安全。您需要了解，您接入91csgo服务所用的系统和通讯网络，有可能因我们可控范围外的情况而发生问题。</p>

      </div>

      <div v-if="articleData.id == 6">
        <p>© 2019-2021 </p>
        <p>请查看帮助中心解决您的日常问题。</p>
        <p>如果您遇到特殊问题，请通过电子邮件或在线客服与我们联系</p>
        <p>Beneficiary：구 일 박스 게임 회사 ；KTL LOGIS CO.,LTD</p>
        <p>Number：+82-055-0762-0568</p>
        <p>Business e-mail: ads@skskins.com</p>
        <p>Address：서울시 강서구 방화동로 7길 39,1층(방화동)；韩国首尔市江西区傍花洞路7街 39，1F</p>
        <p>Postcode：07620</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rightContent',
  props: [ 'articleData' ]
};
</script>

<style scoped lang="stylus">
.helper-content
  .helper-title
    height  63px
    line-height 63px
    font-size 18px
    font-weight bold
    background: #262C32;
    border-radius: 8px 8px 0 0;
    color #ffffff
    padding-left 70px
  .item-content
    height 580px
    padding 10px 70px 20px 70px
    background: #1E242A;
    border-radius: 8px;
    color #ffffff
    overflow-y auto
    p
      font-size 14px
      line-height 36px
    .emphasize
      font-size 18px
      line-height 60px
    .title-strong
      font-weight bold
      font-size 16px
      line-height 30px
      margin-top 20px

</style>
