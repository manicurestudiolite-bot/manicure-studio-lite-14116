import { useState } from 'react';
import { Package, Plus, Search, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Produtos = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
            <Package className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-2xl font-bold">Produtos</h1>
        </div>
        <Button size="icon" className="rounded-full shadow-soft">
          <Plus className="w-5 h-5" />
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Buscar produto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <Card className="shadow-soft">
        <CardContent className="pt-6">
          <div className="text-center text-muted-foreground py-8">
            <Package className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p>Nenhum produto cadastrado</p>
            <Button className="mt-4" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Novo Produto
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Produtos;
