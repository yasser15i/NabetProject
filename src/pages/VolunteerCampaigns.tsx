import React, { useState } from 'react';
import Header from '../components/Header';
import { 
  Heart, 
  MapPin, 
  Calendar, 
  Users, 
  Target,
  Clock,
  Award,
  Leaf,
  Filter,
  Search,
  Plus,
  ArrowLeft,
  CheckCircle,
  Star,
  Share2,
  X
} from 'lucide-react';

const VolunteerCampaigns = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const campaigns = [
    {
      id: 1,
      title: "حملة تشجير الرياض الكبرى",
      description: "مبادرة شاملة لزراعة 10,000 شجرة في أحياء الرياض المختلفة",
      location: "الرياض - أحياء متعددة",
      date: "2024-03-15",
      time: "07:00 صباحاً",
      volunteers: 245,
      maxVolunteers: 500,
      organizer: "أمانة منطقة الرياض",
      status: "active",
      priority: "high",
      image: "https://sa.sakan.co/blog/wp-content/uploads/2024/01/-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-%D8%A7%D9%84%D8%AE%D8%B6%D8%B1%D8%A7%D8%A1-jpg.webp",
      tags: ["تشجير", "مدن", "مجتمعي"],
      progress: 49
    },
    {
      id: 2,
      title: "إعادة تأهيل وادي حنيفة",
      description: "مشروع بيئي لزراعة النباتات المحلية وحماية النظام البيئي",
      location: "وادي حنيفة - الرياض",
      date: "2024-03-20",
      time: "06:30 صباحاً",
      volunteers: 89,
      maxVolunteers: 150,
      organizer: "الهيئة الملكية لمدينة الرياض",
      status: "active",
      priority: "medium",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
      tags: ["أودية", "نباتات محلية", "حماية"],
      progress: 59
    },
    {
      id: 3,
      title: "مبادرة الساحل الأخضر - جدة",
      description: "زراعة أشجار المانجروف على ساحل البحر الأحمر",
      location: "جدة - الكورنيش",
      date: "2024-03-25",
      time: "05:00 صباحاً",
      volunteers: 156,
      maxVolunteers: 200,
      organizer: "وزارة البيئة والمياه والزراعة",
      status: "active",
      priority: "high",
      image: "https://www.agoda.com/wp-content/uploads/2024/06/jeddah-saudi-arabia-1244x700.jpg",
      tags: ["ساحلي", "مانجروف", "بحري"],
      progress: 78
    },
    {
      id: 4,
      title: "حديقة الأحساء المستدامة",
      description: "إنشاء حديقة نموذجية بالنباتات المقاومة للجفاف",
      location: "الأحساء - المبرز",
      date: "2024-04-01",
      time: "07:30 صباحاً",
      volunteers: 67,
      maxVolunteers: 120,
      organizer: "بلدية الأحساء",
      status: "upcoming",
      priority: "medium",
      image: "https://saudipedia.com/saudipedia/uploads/images/2023/08/25/61628.jpg",
      tags: ["حدائق", "مقاوم للجفاف", "مستدام"],
      progress: 56
    },
    {
      id: 5,
      title: "تشجير جبال فيفا",
      description: "زراعة الأشجار المحلية في المناطق الجبلية بجازان",
      location: "فيفا - جازان",
      date: "2024-04-05",
      time: "06:00 صباحاً",
      volunteers: 34,
      maxVolunteers: 80,
      organizer: "جمعية البيئة بجازان",
      status: "upcoming",
      priority: "high",
      image: "https://portalcdn.spa.gov.sa/backend/original/202307/jOQ5LFDZ00BsUyfdtCRp7CpXYAyGdgXpPp3rqHoN.jpg",
      tags: ["جبال", "نباتات محلية", "جازان"],
      progress: 43
    },
    {
      id: 6,
      title: "مشروع الواحة الخضراء",
      description: "إنشاء واحة خضراء في قلب الصحراء بمنطقة نجران",
      location: "نجران - الصحراء الشرقية",
      date: "2024-04-10",
      time: "05:30 صباحاً",
      volunteers: 78,
      maxVolunteers: 100,
      organizer: "إمارة منطقة نجران",
      status: "upcoming",
      priority: "medium",
      image: "https://www.srca.org.sa/media/l5zc1piw/richard-wilding-saudi-arabia-najran-021-1.jpg",
      tags: ["صحراء", "واحة", "نجران"],
      progress: 78
    }
  ];

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesFilter = selectedFilter === 'all' || campaign.status === selectedFilter;
    const matchesSearch = campaign.title.includes(searchTerm) || campaign.location.includes(searchTerm);
    return matchesFilter && matchesSearch;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleJoinCampaign = (campaign) => {
    setSelectedCampaign(campaign);
    setShowJoinModal(true);
  };

  const CreateCampaignModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">إنشاء حملة تشجير جديدة</h2>
            <button 
              onClick={() => setShowCreateModal(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">عنوان الحملة</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="أدخل عنوان الحملة"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">وصف الحملة</label>
            <textarea 
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="اكتب وصفاً تفصيلياً للحملة وأهدافها"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">الموقع</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="المدينة - المنطقة"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">التاريخ</label>
              <input 
                type="date" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">الوقت</label>
              <input 
                type="time" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">عدد المتطوعين المطلوب</label>
              <input 
                type="number" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="100"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">الأولوية</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              <option value="high">عالية</option>
              <option value="medium">متوسطة</option>
              <option value="low">منخفضة</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">الكلمات المفتاحية</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="تشجير، بيئة، مجتمع (افصل بفاصلة)"
            />
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-200 flex gap-3">
          <button 
            onClick={() => setShowCreateModal(false)}
            className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            إنشاء الحملة
          </button>
          <button 
            onClick={() => setShowCreateModal(false)}
            className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );

  const JoinCampaignModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">انضمام للحملة</h2>
            <button 
              onClick={() => setShowJoinModal(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {selectedCampaign && (
          <div className="p-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{selectedCampaign.title}</h3>
              <p className="text-gray-600">{selectedCampaign.location}</p>
              <p className="text-sm text-gray-500">{selectedCampaign.date} - {selectedCampaign.time}</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
                <input 
                  type="tel" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="05xxxxxxxx"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="example@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">الخبرة السابقة</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option>مبتدئ</option>
                  <option>متوسط</option>
                  <option>متقدم</option>
                </select>
              </div>
            </div>
          </div>
        )}
        
        <div className="p-6 border-t border-gray-200 flex gap-3">
          <button 
            onClick={() => setShowJoinModal(false)}
            className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            تأكيد الانضمام
          </button>
          <button 
            onClick={() => setShowJoinModal(false)}
            className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-secondary-100 px-4 py-2 rounded-full text-secondary-800 font-medium mb-6">
            <Heart className="h-4 w-4 ml-2" />
            مبادرات تطوعية لحماية البيئة
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">حملات التطوع للتشجير</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            انضم إلى المبادرات التطوعية لتشجير المملكة وساهم في بناء مستقبل أخضر مستدام
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">24</p>
                <p className="text-gray-600 text-sm">حملة نشطة</p>
              </div>
              <div className="bg-primary-100 p-3 rounded-lg">
                <Target className="h-6 w-6 text-primary-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">1,247</p>
                <p className="text-gray-600 text-sm">متطوع مشارك</p>
              </div>
              <div className="bg-secondary-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-secondary-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">45,678</p>
                <p className="text-gray-600 text-sm">شجرة مزروعة</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">89%</p>
                <p className="text-gray-600 text-sm">معدل النجاح</p>
              </div>
              <div className="bg-earth-100 p-3 rounded-lg">
                <Award className="h-6 w-6 text-earth-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedFilter === 'all' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                جميع الحملات
              </button>
              <button
                onClick={() => setSelectedFilter('active')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedFilter === 'active' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                نشطة الآن
              </button>
              <button
                onClick={() => setSelectedFilter('upcoming')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedFilter === 'upcoming' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                قادمة
              </button>
            </div>
            
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="البحث في الحملات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <button 
                onClick={() => setShowCreateModal(true)}
                className="flex items-center bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Plus className="h-4 w-4 ml-2" />
                إنشاء حملة
              </button>
            </div>
          </div>
        </div>

        {/* Campaigns Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredCampaigns.map((campaign) => (
            <div key={campaign.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={campaign.image} 
                  alt={campaign.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(campaign.priority)}`}>
                    {campaign.priority === 'high' ? 'أولوية عالية' : campaign.priority === 'medium' ? 'أولوية متوسطة' : 'أولوية منخفضة'}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                    {campaign.status === 'active' ? 'نشطة' : campaign.status === 'upcoming' ? 'قادمة' : 'مكتملة'}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-lg hover:bg-white transition-colors">
                    <Share2 className="h-4 w-4 text-gray-700" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{campaign.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{campaign.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 ml-2" />
                    <span className="text-sm">{campaign.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 ml-2" />
                    <span className="text-sm">{campaign.date} - {campaign.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 ml-2" />
                    <span className="text-sm">{campaign.volunteers} من {campaign.maxVolunteers} متطوع</span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>التقدم</span>
                    <span>{campaign.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full transition-all duration-300" 
                      style={{width: `${campaign.progress}%`}}
                    ></div>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {campaign.tags.map((tag, index) => (
                    <span key={index} className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">منظم بواسطة:</span>
                    <br />
                    <span>{campaign.organizer}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="border-2 border-primary-600 text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors text-sm">
                      التفاصيل
                    </button>
                    <button 
                      onClick={() => handleJoinCampaign(campaign)}
                      className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors text-sm flex items-center"
                    >
                      انضم الآن
                      <ArrowLeft className="h-4 w-4 mr-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 mt-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">هل لديك مبادرة تشجير؟</h2>
          <p className="text-xl mb-6 text-primary-100">
            انشر حملتك على منصة نابت واربط مع آلاف المتطوعين المهتمين بحماية البيئة
          </p>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            إنشاء حملة جديدة
          </button>
        </div>
      </div>

      {/* Modals */}
      {showCreateModal && <CreateCampaignModal />}
      {showJoinModal && <JoinCampaignModal />}
    </div>
  );
};

export default VolunteerCampaigns;