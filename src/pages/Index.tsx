import { Shield, Download, MessageCircle, Lock, Eye, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "@/assets/imagem-idosa.png";


const Index = () => {
  const cartilhaUrl = "/cartilha-seguranca-digital.pdf";
  const whatsappUrl = "https://chat.whatsapp.com/CZ6qxpHvUnG3AqJuptG4Hb"; 

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-primary py-20 px-4">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full opacity-30 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        {/* Diagonal beige section */}
        <div className="absolute bottom-0 right-0 w-full h-full bg-background origin-bottom-right transform rotate-[-15deg] translate-y-1/2 translate-x-1/4" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-white/10 px-5 py-3 rounded-full backdrop-blur-sm">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-bold text-white uppercase tracking-wide">Segurança Digital</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-white">
                Cartilha de Apoio à Terceira Idade
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-semibold">
               Um guia completo para o enfrentamento de golpes e fraudes financeiras, especialmente desenvolvido para a segurança da pessoa idosa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg h-14 px-8 shadow-xl hover:shadow-2xl transition-all font-bold"
                  asChild
                >
                  <a href={cartilhaUrl} download>
                    <Download className="w-6 h-6 mr-2" />
                    Baixar Cartilha
                  </a>
                </Button>
                
                
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-secondary/20 rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary/30 rounded-full" />
              <img 
                src={Image} 
                alt="Idoso usando dispositivo digital com segurança"
                className="rounded-3xl shadow-2xl w-full relative z-10 border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-primary">
              O que você vai aprender
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto font-semibold">
              Dicas práticas e essenciais para sua segurança online
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-4 border-primary/20 hover:border-primary hover:shadow-2xl transition-all bg-white">
              <CardContent className="pt-10 pb-10 text-center space-y-6">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Lock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-primary">
                  Segurança Online
                </h3>
                <p className="text-lg text-foreground leading-relaxed font-medium">
                  Conheça os principais golpes e fraudes financeiras na internet
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-4 border-secondary/20 hover:border-secondary hover:shadow-2xl transition-all bg-white">
              <CardContent className="pt-10 pb-10 text-center space-y-6">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-primary">
                  Identificar Golpes
                </h3>
                <p className="text-lg text-foreground leading-relaxed font-medium">
                  Reconheça mensagens falsas e evite cair em armadilhas digitais
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-4 border-primary/20 hover:border-primary hover:shadow-2xl transition-all bg-white">
              <CardContent className="pt-10 pb-10 text-center space-y-6">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <UserCheck className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-primary">
                  Dados Pessoais
                </h3>
                <p className="text-lg text-foreground leading-relaxed font-medium">
                  Saiba como proteger suas informações pessoais na internet
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-secondary rounded-full opacity-20 blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary rounded-full opacity-15 blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto max-w-4xl text-center space-y-8 relative z-10">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl">
            <Shield className="w-14 h-14 text-primary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            Faça parte da nossa comunidade
          </h2>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto font-semibold">
            Junte-se ao nosso grupo no WhatsApp para trocar experiências, tirar dúvidas e receber dicas de segurança regularmente.
          </p>
          <Button 
            size="lg"
            className="text-lg h-14 px-8 shadow-2xl hover:shadow-3xl transition-all font-bold bg-secondary text-primary hover:bg-secondary/90"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6 mr-2" />
              Entrar no Grupo WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-background border-t-4 border-primary">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-primary text-lg font-semibold">
            © 2024 Cartilha de Apoio à Terceira Idade - Protegendo você no mundo digital
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;