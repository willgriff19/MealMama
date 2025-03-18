import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

export default function TestComponent() {
  const [testValue, setTestValue] = useState('');

  return (
    <div className="min-h-screen bg-[#fbfcff] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#1e212b] mb-6">
          Test Playground
        </h1>
        
        {/* Add your test UI elements here */}
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg border-4 border-[#1e212b] shadow-[0px_8px_0px_#1e212b40]">
            <h2 className="text-xl font-bold text-[#1e212b] mb-4">
              Test Section
            </h2>
            
            <div className="space-y-4">
              <Input
                type="text"
                value={testValue}
                onChange={(e) => setTestValue(e.target.value)}
                placeholder="Test input"
                className="w-full"
              />
              
              <Button
                onClick={() => console.log('Test value:', testValue)}
                className="bg-[#06d6a0] hover:bg-[#06d6a0] text-[#1e212b] border-4 border-[#1e212b] shadow-[0px_3.99px_0px_#1e212b40] font-medium"
              >
                Test Button
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 