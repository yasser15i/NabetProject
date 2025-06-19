import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { 
  User, 
  Building, 
  Leaf, 
  ArrowLeft,
  Users,
  Shield,
  Target,
  Eye
} from 'lucide-react';

const LoginPage = () => {
  const [selectedUserType, setSelectedUserType] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-primary-100 px-4 py-2 rounded-full text-primary-800 font-medium mb-6">
            <Leaf className="h-4 w-4 ml-2" />
            انضم إلى منصة نابت
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">تسجيل الدخول</h1>
          <p className="text-xl text-gray-600">
            اختر نوع حسابك للوصول إلى الميزات المناسبة لك
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Individual Login */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center mb-6">
              <div className="bg-primary-100 p-4 rounded-full w-20 h-20 mx-auto mb-4">
                <User className="h-12 w-12 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">الأفراد</h2>
              <p className="text-gray-600">للمواطنين والمقيمين المهتمين بالتشجير</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700">
                <Eye className="h-5 w-5 text-primary-600 ml-3" />
                <span className="text-sm">تحليل الأراضي الشخصية</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Users className="h-5 w-5 text-primary-600 ml-3" />
                <span className="text-sm">المشاركة في الحملات التطوعية</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Target className="h-5 w-5 text-primary-600 ml-3" />
                <span className="text-sm">إضافة ومتابعة الأراضي الشخصية</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Leaf className="h-5 w-5 text-primary-600 ml-3" />
                <span className="text-sm">لوحة تحكم مبسطة</span>
              </div>
            </div>
            
            <Link 
              to="/individual-dashboard"
              className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center"
            >
              دخول الأفراد
              <ArrowLeft className="h-5 w-5 mr-2" />
            </Link>
          </div>

          {/* Organization Login */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center mb-6">
              <div className="bg-secondary-100 p-4 rounded-full w-20 h-20 mx-auto mb-4">
                <Building className="h-12 w-12 text-secondary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">الجهات</h2>
              <p className="text-gray-600">للجهات الحكومية والمؤسسات البيئية</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700">
                <Shield className="h-5 w-5 text-secondary-600 ml-3" />
                <span className="text-sm">لوحة تحكم شاملة ومتقدمة</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Target className="h-5 w-5 text-secondary-600 ml-3" />
                <span className="text-sm">إنشاء وإدارة الحملات التطوعية</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Eye className="h-5 w-5 text-secondary-600 ml-3" />
                <span className="text-sm">مراقبة الأراضي والتنبيهات المبكرة</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Users className="h-5 w-5 text-secondary-600 ml-3" />
                <span className="text-sm">إدارة المتطوعين والشراكات</span>
              </div>
            </div>
            
            <Link 
              to="/organization-dashboard"
              className="w-full bg-secondary-600 text-white py-3 rounded-lg font-semibold hover:bg-secondary-700 transition-colors duration-300 flex items-center justify-center"
            >
              دخول الجهات
              <ArrowLeft className="h-5 w-5 mr-2" />
            </Link>
          </div>
        </div>

        {/* Features Comparison */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">مقارنة الميزات</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-right py-4 px-6 font-semibold text-gray-900">الميزة</th>
                  <th className="text-center py-4 px-6 font-semibold text-primary-600">الأفراد</th>
                  <th className="text-center py-4 px-6 font-semibold text-secondary-600">الجهات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-4 px-6 text-gray-700">تحليل الأراضي</td>
                  <td className="py-4 px-6 text-center">✅</td>
                  <td className="py-4 px-6 text-center">✅</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">المشاركة في الحملات</td>
                  <td className="py-4 px-6 text-center">✅</td>
                  <td className="py-4 px-6 text-center">✅</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">إنشاء الحملات</td>
                  <td className="py-4 px-6 text-center">❌</td>
                  <td className="py-4 px-6 text-center">✅</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">التنبيهات المبكرة</td>
                  <td className="py-4 px-6 text-center">❌</td>
                  <td className="py-4 px-6 text-center">✅</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">التقارير المتقدمة</td>
                  <td className="py-4 px-6 text-center">❌</td>
                  <td className="py-4 px-6 text-center">✅</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">إدارة المتطوعين</td>
                  <td className="py-4 px-6 text-center">❌</td>
                  <td className="py-4 px-6 text-center">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">تحتاج مساعدة في اختيار نوع الحساب المناسب؟</p>
          <button className="text-primary-600 hover:text-primary-700 font-medium">
            تواصل مع فريق الدعم
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;